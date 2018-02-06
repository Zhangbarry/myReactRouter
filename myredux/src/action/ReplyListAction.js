const request=()=>({
	type:'REPLYLIST_REQUEST'
})
const received=(data)=>({
	type:'REPLY_LIST_RECEIVED',
	data
})
const receiveError=()=>({
	type:'REPLY_LIST_RECEIVEERROR'
})


const fetchReplyList =()=> (dispatch) => {
  dispatch(request())
  const url = "http://106.14.32.113:8085/api/Interactive/GetToDayHotArgument"
  return fetch(url)
      .then(response => {
      	return response.json()
      })
      .then(res => {
          dispatch(received(res.Data))
      })
      .catch(err=>{
        dispatch(receiveError())
      })
}

export const fetchReplyListAction=()=>(dispatch)=>{
	return dispatch(fetchReplyList())
	}
