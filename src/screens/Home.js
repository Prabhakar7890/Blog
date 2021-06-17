import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { APIHoc } from '../Redux/HOC/ApiConnected';
import { PostHoc } from './PostBlog';
 
class Home extends React.Component{
    render(){
        return(
            <Router>
                <div id="container">
                    <div id="menu-bar">
                        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Blog_Update">BlogUpdate</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Blog_Display">BlogDisplay</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div id="content">
                        <Route path="/Blog_Update" exact component={APIHoc} ></Route>
                        <Route path="/Blog_Display" component={PostHoc} ></Route>
                    </div>
                </div>
    </Router>
        )
    }
}
export default Home;