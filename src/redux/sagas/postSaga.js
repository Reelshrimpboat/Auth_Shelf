import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postSaga () {
    yield takeEvery('ADD_ITEM', postItem);
}

function* postItem (action) {
    yield axios.post ('/api/shelf', action.payload )
}

export default postSaga;