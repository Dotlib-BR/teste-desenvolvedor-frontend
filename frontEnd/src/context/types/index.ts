//React
import { Dispatch, SetStateAction } from 'react';

export interface IGlobalState {
    page: number;
    listData: any
  }

export interface IGlobalStateContextType {
    state: IGlobalState;
    setState: Dispatch<SetStateAction<IGlobalState>>;
}