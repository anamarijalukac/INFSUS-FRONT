import React, {Component, useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import {createTheme, MuiThemeProvider} from "@material-ui/core";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import OrchestraLayout from "./components/OrchestraLayout/OrchestraLayout";
import OrchestraDetails from "./components/OrchestraDetails/OrchestraDetails";
import Discography from "./components/Discography/Discography";
import UserProfile from "./components/UserProfile/UserProfile";
import {getOrchestras} from "./actions/orchestra";
import {getUserById} from "./actions/user";
import SignIn from "./components/SingIn/SignIn";



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

function App()  {

    const dispatch = useDispatch();


    const [currentId, setCurrentId] = useState("1");



    useEffect(() => {
        dispatch(getOrchestras());
        dispatch(getUserById(currentId));


    }, [currentId, dispatch])


    const user = useSelector((state) => state.user);
    console.log(user)




    return (
        <MuiThemeProvider theme={theme} >
            <BrowserRouter>

                <Navbar currentId={currentId}/>



                <Routes>
                    <Route path="/" exact element={<Home currentId={currentId}/>}/>
                    <Route path="/orchestra" exact element={<OrchestraLayout />}/>
                    <Route path="/orchestra/:id"  element={<OrchestraDetails currentId={currentId}/>}/>
                    <Route path="/orchestra/:id/discography"  element={<Discography />}/>
                    <Route path="/user/:id/"  element={<UserProfile user={user} />}/>
                    <Route path="/auth/"  element={<SignIn signinfunction={setCurrentId}/>}/>


                </Routes>
            </BrowserRouter>
        </MuiThemeProvider>
    );
}


export default App;

