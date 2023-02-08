import React, {createContext, useState, useMemo} from 'react';
import {Routes, Route} from "react-router-dom";
import {MainRoutes} from "./routes";


export const MyContext = createContext();

function App(props) {

    const [url, setUrl] = useState('http://139.144.186.40/');

    return (
        <MyContext.Provider value={{
            url,
        }}>
            <Routes>
                {
                    MainRoutes.map((route, index) => (
                        <Route key={index} {...route} />
                    ))
                }
            </Routes>
        </MyContext.Provider>
    );
}

export default App;