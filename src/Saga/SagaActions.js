import axios from 'axios';
import {call,put} from 'redux-saga/effects'

function getCaller(url){
    return axios.get(url);
}

function doPost(url,data){
    return axios.post(url,data);
}

export function* handleBlog(){
      let   response = yield call(getCaller,"http://localhost:9090/Blogs")
      yield put({type:'BLOG_ACTION',records:response.data});

}

export function* addBlog(action){
    let blog=action.data;
    this.response = yield call(doPost,"http://localhost:9090/Blogs",blog);
    yield handleBlog();

} 