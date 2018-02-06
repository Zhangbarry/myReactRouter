'use strict'
import React from "react"

export default class Loadstation extends React.Component{
	constructor(props){
		super(props);
		this.time = null;
		this.isLoad=this.isLoad.bind(this)
	}
	render(){
		let {isLoading,getData}=this.props
		return(
			<div ref={(warp)=>this.warp=warp}>
				<img src="http://public.jyzqsh.com/img/refresh.png" style={isLoading?{visibility:"visible"}:{visibility:"hidden"}}/>
			</div>
		)
	}
	isLoad(){
		clearTimeout(this.time)
		this.time=setTimeout(()=>{
			let top = this.warp.getBoundingClientRect().top
			let height = window.innerHeight
			if(top<=height){
				this.props.getData()
			}
		},500)
	}
	componentDidMount(){
		window.addEventListener('scroll',this.isLoad)
	}
	componentWillUnmount(){
		clearTimeout(this.time)
		window.removeEventListener('scroll',this.isLoad)
	}
}
