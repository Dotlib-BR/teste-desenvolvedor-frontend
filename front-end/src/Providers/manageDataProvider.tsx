/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
import { FC, createContext, useContext, useEffect, useState } from "react";
import { Medicine } from "../Types/medicine";

interface IManageData {
    medicines: Medicine[],
    updateMedicines: (page: number) => void,
    pages: number, 
}

export const ManageDataContext = createContext<IManageData>({} as IManageData);

export const ManageDataProvider: FC<any> = (props) =>{

    const [medicines, setMedicines] = useState([]);
    const [pages, setPages] = useState(0);


    const updateMedicines = async (page: number) => {
        const response = await axios.get(`http://localhost:3000/data?_page=${page}`);
        setMedicines(response.data.data);
        setPages(response.data.pages)
    }

    useEffect(() => {
        updateMedicines(1);
    } , []);

    return(
        <ManageDataContext.Provider value={{
            medicines,
            updateMedicines,
            pages
        }}>
            {props.children}
        </ManageDataContext.Provider>
        
    )
}

export const useManageData = () => useContext(ManageDataContext)