import React, { useEffect,useState,useCallback } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner"; 
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"; 


 const News = ({country,category,pagesize,UpdateProgress,apiKey})=> {   
      const[articles,setArticles] = useState([]); 
      const [loading,setLoading] = useState(true) ; 
      const[page,setPage] = useState(1) ; 
      const[totalResults,setTotalResults] = useState(0) 
      // document.title =  `${capitalizeFirstLetter(category)} - News Monkey`

      const UpdateNews = useCallback(async () => {
        UpdateProgress(10);
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pagesize}`);
        setLoading(true);
        console.log(data);
        let parsedData = await data.json();
        UpdateProgress(30);
        console.log(parsedData);
        UpdateProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResult);
        setLoading(false);
        UpdateProgress(100);
      }, [country, category, page, pagesize, UpdateProgress,apiKey]);
    
    const capitalizeFirstLetter = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
 const fetchMoreData = async() => { 
  
   let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page+1}&pageSize=${pagesize}`)
   setPage(page+1)  
  
        setLoading(true)
      let parsedData = await data.json() ;  
      console.log(parsedData)  
      setArticles(articles.concat(parsedData.articles)) 
      setTotalResults( parsedData.totalResult) 
      setLoading(false)   
}
useEffect(() => {
  UpdateNews();  


// eslint-disable-next-line react-hooks/exhaustive-deps
},[])




//  const handlePrevclick = async ()=>{ 
 
//    setPage(page -1) 
//    UpdateNews();
  
//   } 
//  const handleNextclick =  async ()=>{  
//    if(! (page +1 < Math.ceil(totalResults/pagesize ))){
//  setPage(page+1)
//     UpdateNews();
//   }  
// }
   
    return (
      <> 
        
        <div className="container my-3">
          <h2 className="text-center"> Top {capitalizeFirstLetter(category)} Headlines</h2> 
          { loading && <Spinner/>} 
          <InfiniteScroll
          dataLength={articles.length}
          next={
            fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        > 
        <div className="container">
          <div className="row">  
          {loading===false && articles.filter((element)=>{
            if(element.title !=="[Removed]"||element.urlToImage === null){return true}else{return false}
          }).map((element)=>{  

               return <div className="col-md-4" key={element.urlToImage}>
              <Newsitem 
              title={!element.title?" ":element.title.slice(0,34)}
              description={!element.description?" " :element.description.slice(0,89)}
              imageUrl={element.urlToImage} 
              newsUrl={element.url} author={element.author} data={element.publishedAt} source={element.source.name}
              />  
            
            </div>   
            
            
          }) 
          
        } 
          </div>  
          </div>
              </InfiniteScroll>
          
        
        </div>
      </>
    );
  } 
 News.propTypes = { 
    country:PropTypes.string , 
    pagesize: PropTypes.number, 
    category:PropTypes.string

}   
 News.defaultProps = {
  country:"in", 
  pagesize:5

}  
export default News ;
