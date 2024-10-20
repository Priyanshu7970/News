import React from "react";

 const Newsitem =  (props)=>{  
  
 
    let {title, description,imageUrl,newsUrl,author,date,source}= props ;
    return (
      <>  
    
      
        <div className="card" style={{width: "18rem"}}> 
        <span className="position-absolute top-3 text-white start-100 translate-middle badge rounded-pill bg-danger border border-10">
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
          <img className="card-img-top" src={!imageUrl?"https://thumbs.dreamstime.com/z/error-page-not-found-concept-forest-background-nature-landscape-lost-raccoon-vector-cartoon-illustration-evergreen-coniferous-187855824.jpg?w=992":imageUrl} width={300} height={200} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"> 
      <small className="text-body-secondary">By {!author?"Unknown":author} at {!date?"Unknown": new Date(date).toDateString()}</small>
   </p>
            <a href={newsUrl} target="_blank" className="btn btn-dark " rel="noreferrer"> 
              Read more

            </a>
          </div>
        </div>
      </>
    );
  }

  export default Newsitem ;
