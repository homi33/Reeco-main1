import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
  } from "react";
  import axios from "axios";
  
  const DataContext = createContext();
  
  export function useAuth() {
    return useContext(DataContext);
  }

  export function DataProvider({ children }) {
    const [data,setData] = useState([]);

    const getData = async() => {
      await axios.get("./orders.json").then(response => setData(response.data));
    }

    const value = useMemo(
        () => ({
         data,
         setData
        }),
        [data],
      );

      useEffect(() => {
        async function fetchData() {
          await getData();
           
          }
         fetchData();
      }, []);
    
      return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
    
  }