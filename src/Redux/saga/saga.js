import {
  GET_DATA_FAILURE,
  GET_DATA_REQUESTED,
  GET_DATA_SUCCESS,
} from "../constants";
import { call, put, takeEvery } from "redux-saga/effects";
import { portfolioApi } from "../Api/Portfolio";

function* fetchPortfolio() {
  try {
    const response = yield call(portfolioApi);

    yield put({ type: GET_DATA_SUCCESS, payload: response });
  } catch (e) {
    yield put({ type: GET_DATA_FAILURE, error: e.message });
  }
}

function* allPortfolioData() {
  yield takeEvery(GET_DATA_REQUESTED, fetchPortfolio);
}

export default allPortfolioData;
