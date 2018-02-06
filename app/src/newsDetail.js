import React from 'react'
import axios from 'axios'
import nzan from './img/zan_n.png'
import zan from './img/zan.png'
import head from './img/head.jpg'



export default class NewsDetail extends React.Component{
	constructor(props){
		super(props);
		this.state={
			data:[],
			reply:[],
			val:"this is input"
		}
		this.getData = this.getData.bind(this);
		this.handleClick=this.handleClick.bind(this)
		this.handleChange=this.handleChange.bind(this)
	}
	componentDidMount(){
		this.getData();
	}
	
	handleChange(event){
		this.setState({
			val:event.target.value
		})
	}
	
	handleClick(){			
		axios({
			method:'post',
			url:"http://106.14.32.113:8085/api/Interactive/UserLeaveMsg",
			headers:{
				"Content-Type":"application/x-www-form-urlencoded",
			},
			data:"Question="+this.state.val+'&argumentId='+this.props.match.params.id
			
		}).then((res)=>{
			this.setState({
				val:"this is input"
			})
		}).catch(function (error) {
		      console.log(error)
		   })
	}
	
	getData(){
		let id = this.props.match.params.id;
		axios.get('http://106.14.32.113:8085/api/Interactive/GetArgumentById?Id='+id).then((res)=>{
			this.setState({
				data:res.data.Data
			})
		})
		
		axios.get('http://106.14.32.113:8085/api/Interactive/GetUserLeaveMsgById?Id='+id).then((res)=>{
			this.setState({
				reply:res.data.Data
			});
			console.log(res)
		});
	}
	
	render(){
		let reply = this.state.reply;
		var replyHtml= <div />
		if(reply !== ""){
		  replyHtml = reply.map((reply,v)=>{
								return (
									<li className="clearfix ptb4 bb_15" key={v}>
										<div className="fl w20p">
											<img src={reply.headimgurl?reply.headimgurl:head} className="db wp" />
										</div>
										<div className="fl w80p">
											<div className="fwb fs16 plr4">{reply.nickname?reply.nickname:"游客"}</div>
											<div className="clearfix fs12 c_18 ptb4">
												<span className="fl plr6">{reply.CreateTime.replace("T"," ")}</span>
												<span className="fr plr6">({reply.Likes})</span>
												<img src={zan} className="fr w1em"/>
											</div>
											<div className="fs14 c_22 plr4">{reply.Question}</div>
										</div>
									</li>
								)
							})
		}
		return (
			<div>
				<div key={this.state.data.Id}>
					<div className="fwb fs24 tac ptb6">{this.state.data.Title}</div>
					<div><img src={this.state.data.Image} className="db w80p ma0" /></div>
					<div className="p5 fs14" dangerouslySetInnerHTML={{__html:this.state.data.Content}}/>
				</div>
				<div className="mb3em">
					<ul>
						{replyHtml}
					</ul>
				</div>
				
				<div className="clearfix pf bottom_0 wp">
					<input type="text" value={this.state.val} className="fl w90-5p ptb8 tnt1" onChange={this.handleChange} />
					<div className="fl w15p ptb6 bc_41 c_11 tac" onClick={this.handleClick}>发送</div>
				</div>
				
			</div>
		)
	}
}
