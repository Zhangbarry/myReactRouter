import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReplyList from '../components/ReplyList'
import *as replyListActionLink from '../action/ReplyListAction'

const mapStateToProps = (state)=>{
	return {
		reply:state
	}
}
const mapDispatchToProps=(dispatch)=>{
	
	return {
    	replyAction:bindActionCreators(replyListActionLink,dispatch)
  	}
}


export default connect(mapStateToProps,mapDispatchToProps)(ReplyList)
