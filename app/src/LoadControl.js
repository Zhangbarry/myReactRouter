'use strict'
import React from 'react'
import './QGindex.css'

export default class LoadControl extends React.Component{
	constructor(props){
		super(props)
		this.time=null
		this.myLoad = this.myLoad.bind(this)
	}
	
	render(){
		let {isLoading,getDate} = this.props
		return(
			<div className="load-control tac" ref={(wrap)=>{this.wrap=wrap}}>
				<img src="http://public.jyzqsh.com/img/refresh.png" className="w50" style={isLoading?{visibility:'visible'}:{visibility:'hidden'}} />
			</div>
		)
	}
	
	myLoad(){
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
		window.addEventListener('scroll',this.myLoad)
	}
	
	componentWillUnmount(){
		clearTimeout(this.time)
		window.removeEventListener('scroll',this.myLoad)
	}	
}


