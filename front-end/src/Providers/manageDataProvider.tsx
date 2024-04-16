/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
import { FC, createContext, useContext, useEffect, useState } from "react";

interface IManageData {
    medicines: any[],

}

export const ManageDataContext = createContext<IManageData>({} as IManageData);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ManageDataProvider: FC<any> = (props) =>{

    const [medicines, setMedicines] = useState([]);


    const updateMedicines = async () => {
        const response = await axios.get('http://localhost:3000/data');
        setMedicines(response.data);
    }

    useEffect(() => {
        updateMedicines();
    } , []);

    return(
        <ManageDataContext.Provider value={{
            medicines,
        }}>
            {props.children}
        </ManageDataContext.Provider>
        
    )
}

export const useManageData = () => useContext(ManageDataContext)