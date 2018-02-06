import React from 'react';
//import ReactDOM from 'react-dom';
import axios from 'axios'
import Loadstation from './Loadstation'

export default class Content extends React.Component{
	constructor(props){
		super(props)
		this.state=
			{
				content:[],
				page:1,
				isLoading:false
			}
		
		this.myLoad=this.myLoad.bind(this)
	}
	componentDidMount(){
		this.myLoad()
	}
	myLoad(){
		this.setState({isLoading:true});
		let _page = this.state.page+1
		let page = this.state.page*10
		let content = this.state.content
		axios.get('http:/\n/106.14.32.113:8085/api/Signed/GetSigArticleList?ThisPage='+page).then((res)=>{
			this.setState({
				content:content.concat(JSON.parse(res.data.Data)),
				page:_page,
				isLoading:false
			})
		})
	}
	render(){
		let content=this.state.content
		return(
			<div>
				<ul>
					{
						content.map((con)=>{
							return (
								<li key={con.Id}>
									<div dangerouslySetInnerHTML={{__html:con.Content}}/>
								</li>
							)
						})
					}
				</ul>
				<Loadstation getData={this.myLoad} isLoading={this.state.isLoading} />
			</div>
		)
	}
}
