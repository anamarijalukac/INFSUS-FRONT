import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import {createTheme, MuiThemeProvider} from "@material-ui/core";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import OrchestraLayout from "./components/OrchestraLayout/OrchestraLayout";
import OrchestraDetails from "./components/OrchestraDetails/OrchestraDetails";
import Discography from "./components/Discography/Discography";
import UserProfile from "./components/UserProfile/UserProfile";
import {getOrchestras} from "./actions/orchestra";


const theme = createTheme({
    palette: {
        primary: {
            main: 'rgba(255,153,0,0.88)',
        },
        secondary: {
            main: 'rgb(219,204,202)',
        }
        ,
        movie: {
            main: 'rgb(38,38,38)',
        },
        accent:{
            main: 'rgb(40,146,206)',
        },

    },

});

function App() {
    //set currentId
    //const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));



    useEffect(() => {
        dispatch(getOrchestras());


    }, [ dispatch])



    let currentId='123';

    return (
        <MuiThemeProvider theme={theme} >
            <BrowserRouter>

                <Navbar currentId={currentId}/>



                <Routes>
                    <Route path="/" exact element={<Home setCurrentId={currentId}/>}/>
                    <Route path="/orchestra" exact element={<OrchestraLayout />}/>
                    <Route path="/orchestra/:id"  element={<OrchestraDetails currentId={currentId}/>}/>
                    <Route path="/orchestra/:id/discography"  element={<Discography />}/>
                    <Route path="/user/:id/"  element={<UserProfile />}/>

                </Routes>
            </BrowserRouter>
        </MuiThemeProvider>
    );
}


export default App;

