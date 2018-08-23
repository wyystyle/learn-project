import React,{ Component } from 'react';
import Login from './pages/login/';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from "react-router-dom";
class App extends Component{
	render(){
		//return 只能返回一个
		return(
				<Login />		
		)
	}

}

export default App;