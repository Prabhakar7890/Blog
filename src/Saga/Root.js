import { takeEvery} from 'redux-saga/effects';
import { addBlog, handleBlog } from './SagaActions';

export  function* rootSaga(){
    yield takeEvery("BLOG_READ_ACTION",handleBlog);
    yield takeEvery("ADD_BLOG",addBlog);
}