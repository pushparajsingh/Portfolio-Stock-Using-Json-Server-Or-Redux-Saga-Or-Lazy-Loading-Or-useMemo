import { all } from "redux-saga/effects";
import allPortfolioData from "./saga";

export default function* rootSaga() {
  yield all([allPortfolioData()]);
}
