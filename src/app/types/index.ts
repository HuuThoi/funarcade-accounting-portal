import { Reducer, Store } from 'redux';
// import { RouterState } from 'connected-react-router';
import { Saga } from 'redux-saga';

import { AppState } from 'app/appTypes';

export interface InjectedStore extends Store {
  injectedReducers: any;
  injectedSagas: any;
  runSaga(saga: Saga<any[]> | undefined, args: any | undefined): any;
}

export interface InjectReducerParams {
  key: keyof ApplicationRootState;
  reducer: Reducer<any, any>;
}

export interface InjectSagaParams {
  key: keyof ApplicationRootState;
  saga: Saga;
  mode?: any;
}

export interface ApplicationRootState {
  readonly app: AppState;
}
