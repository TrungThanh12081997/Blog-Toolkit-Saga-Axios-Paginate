import { put, takeLatest } from "redux-saga/effects";
import { CommentServices, PostServices } from "services/test/type";

import { setComments, setPosts } from "./test";

type PostsPayloadTypes = { payload: PostServices[]; type: PostServices[] };
type CommentsPayloadTypes = { payload: CommentServices[]; type: CommentServices[] };

export function* fetchPostsProducts({ payload }: PostsPayloadTypes) {
    yield put(setPosts(payload));
}

export function* fetchCommentsProducts({ payload }: CommentsPayloadTypes) {
    yield put(setComments(payload));
}
export default function* rootSaga() {
    yield takeLatest("GET_POSTS_REQUESTED", fetchPostsProducts);
    yield takeLatest("GET_COMMENTS_REQUESTED", fetchCommentsProducts);
}
