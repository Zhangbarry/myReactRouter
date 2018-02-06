import React from 'react'

export default class ReplyList extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			data:[]
		}
	}
	componentDidMount(){
		this.props.replyAction.fetchReplyListAction()
	}
	render(){
		let constant = this.props.reply.replyListReducer
		console.log(constant)
		let htmlDom;
		if (constant === null) {
		      htmlDom = (<div/>)
		    }else{
		    	return (
		    		htmlDom = constant.data.map(item=>{
		    			return (
		    				<div key={item.Id}>
		    					<div>{item.Title}</div>
		    					<img src={item.Image} />
		    					<div dangerouslySetInnerHTML={{__html:item.Content}} />
		    				</div>
		    			)
		    		})
		    	)
		    }
		return (
			<div>
				{htmlDom}
			</div>
		)
	}
}