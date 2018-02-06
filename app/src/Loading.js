'use strict'
import React from "react"
import './QGindex.css'

export default class Loading extends React.Component{
	constructor(props){
		super(props);
		this.time=null;
		this.loadStation=this.loadStation.bind(this);
	}
	render(){
		let {isLoading,getDate} = this.props
		return(
			<div className="tac" ref={(wrap)=>{this.wrap=wrap}}>
			 	<img src="http://public.jyzqsh.com/img/refresh.png" className="w50" style={isLoading?{visibility:'visible'}:{visibility:'hidden'}} />
			</div>
		)
	}
	loadStation(){
		clearTimeout(this.time)
		this.time = setTimeout(()=>{
			let top = this.wrap.getBoundingClientRect().top
			let height = window.innerHeight
			if(top<=height){
				this.props.getDate()
			}
			
		},400)
	}
	componentDidMount(){
		window.addEventListener('scroll',this.loadStation)
	}
	componentWillUnmount(){
		clearTimeout(this.time)
		window.removeEventListener('scroll',this.loadstation)
	}
}
