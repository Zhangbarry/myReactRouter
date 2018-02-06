import React,{Component} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

class Nav extends React.Component{
    constructor(){
        super();
        this.state = {
           	com:[]
        };
    }
    componentDidMount(){
        axios.get('https://api.github.com/users/octocat/gists').then((res)=>{
//          console.log(res.data);
			this.setState({
				com:res.data
			});
        }).catch((err)=>{
            console.log(err.status);
        })
    }
    render(){
    	var list = this.state.com 
        return (<div>
            <ul>
            	{
                    list.map(function (list) {
                        return (
                        	<li className="" key={list.url}>
                        		<div className="ptb4">{list.url}</div>
                        		<div className="ptb4">{list.forks_url}</div>
                        		<a href={list.url}>{list.url}</a>
                        	</li>
                        )
                    })
                }
            	
            </ul>
        </div>)
    }
}

export default Nav