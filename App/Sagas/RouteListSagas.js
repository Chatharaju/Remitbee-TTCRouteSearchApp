import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import RouteListActions from '../Redux/RouteListRedux'

export function * getRouteData (api, aValue) {
  // const { username } = action
  // make the call to the api
  const response = yield call(api.getRouteList, aValue)

  if (response.ok) {
    // do data conversion here if needed
    yield put(RouteListActions.routeSuccess(response))
  } else {
    yield put(RouteListActions.routeFailure())
  }
}
