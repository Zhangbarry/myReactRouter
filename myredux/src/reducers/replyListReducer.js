const replyListReducer = (state=null,action)=>{
	switch(action.type){
		case 'REPLYLIST_REQUEST':
		return state
		case 'REPLY_LIST_RECEIVED':
		return {
			data:action.data
		}
		case 'REPLY_LIST_RECEIVEERROR':
		return state
		default:
		return state
	}
}

export default replyListReducer