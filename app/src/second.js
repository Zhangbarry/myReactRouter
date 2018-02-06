import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import LoadControl from './LoadControl'

export default class Second extends React.Component{
	constructor(props){
		super(props);
		this.state={
			content:[],
			page:1,
			isLoading:false
		}
		this.onLoad=this.onLoad.bind(this)
	}
	componentDidMount(){
		this.onLoad()
	}
	onLoad(){
		this.setState({isLoading:true})
		let self = this
		let _page = self.state.page+1
		let page = (self.state.page)*10
		let content = self.state.content
		axios.get('http:/\n/106.14.32.113:8085/api/Signed/GetSigArticleList?ThisPage='+page).then((res)=>{
			setTimeout(()=>{
				self.setState({
					content:content.concat(JSON.parse(res.data.Data)),
					isLoading:false,
					page:_page
				})
			},2000)
		})
		
	}
	
	render(){
		var content = this.state.content;
		return(
			<div>
			<ul>
				{
					content.map((con)=>{
						return(
							<li key={con.Id}>
								<div className="bc_12 ptb6 mt15" dangerouslySetInnerHTML={{__html:con.Content}} />
							</li>
						)
					})
				}
			</ul>
			<LoadControl getDate={this.onLoad} isLoading={this.state.isLoading} />
			</div>
		)
	}
}
 
