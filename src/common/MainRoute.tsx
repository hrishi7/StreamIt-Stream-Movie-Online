import * as React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'


import {Home} from './Home'
import {Header} from './Header'
import {Footer} from './Footer'

export const MainRoute : React.FC<{}> = () => {
  
    return (
      <Router>
        <div>
            <Header/>
            <div style={{minHeight: '500px'}}>
            <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
            </div>
         
          <Footer/>
        </div>
      </Router>
    );
  
}
