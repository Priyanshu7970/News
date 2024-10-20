import React, { useState } from 'react'
import Navbar from './components/Navbar' 
import News from './components/News'  
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom/cjs/react-router-dom.min'
 const App = ()=> {
   const pageSize = 10;
  let [progress,setProgress] = useState(0) 
   const apiKey = process.env.REACT_APP_NEWS_API ;
 

  let  UpdateProgress = (progress)=>{ 
         setProgress(progress)

  }

    return ( <>  
     <Router>
      <Navbar/>   
      <LoadingBar 
      height={3}
        color='#f11946'
        progress={progress}
      /> 
      <Switch>
       <Route exact path="/"> <News UpdateProgress={UpdateProgress} apiKey={apiKey} key="general" pagesize={pageSize} country="us" category="general"/></Route>
       <Route exact path="/business"> <News UpdateProgress={UpdateProgress} apiKey={apiKey} key="business" pagesize={pageSize} country="us" category="business"/></Route>
       <Route exact path="/entertainment"> <News UpdateProgress={UpdateProgress} apiKey={apiKey} key="entertainment" pagesize={pageSize} country="us" category="entertainment"/></Route>
       <Route exact path="/health"> <News UpdateProgress={UpdateProgress} apiKey={apiKey} key="health" pagesize={pageSize} country="us" category="health"/></Route>
       <Route exact path="/science"> <News UpdateProgress={UpdateProgress} apiKey={apiKey} key="science" pagesize={pageSize} country="us" category="science"/></Route>
       <Route exact path="/sports"> <News UpdateProgress={UpdateProgress} apiKey={apiKey} key="sports" pagesize={pageSize} country="us" category="sports"/></Route>
       <Route exact path="/technology"> <News UpdateProgress={UpdateProgress} apiKey={apiKey} key="technology" pagesize={pageSize} country="us" category="technology"/></Route> 
      </Switch> 
        </Router>
        </>
    
    )
  }
  
export default App ;


