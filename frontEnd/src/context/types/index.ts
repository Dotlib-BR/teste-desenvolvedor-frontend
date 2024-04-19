//React
import { Dispatch, SetStateAction } from 'react';

//Types
import { IMedicineData } from '../../types';

export interface IGlobalState {
    page: number;
    listData: IMedicineData[];
    showFooter: boolean;
  }

export interface IGlobalStateContextType {
    state: IGlobalState;
    setState: Dispatch<SetStateAction<IGlobalState>>;
}