export interface ICommonState {
  isLoading: boolean;
  error: string | null;
}

export interface IAppState {
  commonReducer: ICommonState;
}
