import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom'//导入的方式跟之前有点变化
import axios from 'axios';

export default class Home extends React.Component{
	constructor(props){
        super(props);
        this.state = {
           	com:[],
           	toking:[]
        };
    }
	componentDidMount(){
		axios.get('http://106.14.32.113:8085/api/Interactive/GetUserLeaveMsgById').then((res)=>{
			this.setState({
				com:res.data.Data
			});
        })
        
        axios.get('http://106.14.32.113:8085/api/Interactive/GetToDayHotArgument').then((res)=>{
        	this.setState({
        		toking:res.data.Data
        	});
        })
	}
	render(){
		var toking=this.state.toking;
		
		return(
			<div>
				<div>
					<ul>
						{
							toking.map((talk)=>{
								let {Id,Image,Title,Content}=talk;
								let url = `/Detail/${Id}`
							return(
								<li key={Id} className="clearfix bb_15 ptb6">
									<Link to={url}>
										<div className="fl w20p"><img src={Image} className="db wp"/></div>
										<div className="fl w80p fs14">
											<div className="fwb nwarp p5">{Title}</div>
											<div className="p5" dangerouslySetInnerHTML={{__html:Content}} />
										</div>
									</Link>
								</li>
							)
						})
						}
					</ul>
				</div>
			</div>
		)
	}
}
