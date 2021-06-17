import Api from '../../screens/Api'
import { connect } from'react-redux'
import { bindActionCreators } from 'redux'
import { storeBlogApi } from '../Action/Blog'

const stateToProps =(store)=>{
    return {Blog: store.Blogvalues.Blog}
}
const actionToProps = (dispatch)=>{
    return bindActionCreators({storeBlog: storeBlogApi},dispatch)
}
export const APIHoc = connect(stateToProps,actionToProps)(Api) 