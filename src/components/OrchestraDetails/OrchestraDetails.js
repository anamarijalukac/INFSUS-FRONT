import React, {useState} from 'react';
import {Button, Divider, Grid, Paper, Typography} from '@material-ui/core';
import {useDispatch} from "react-redux";
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import useStyles from './styles';
import UserCardLayout from "../UserCardsLayout/UserCardLayout";
import EventCardsLayout from "../EventCardsLayout/EventCardsLayout";
import {Add} from "@material-ui/icons";
import {createOrchestra, deleteOrchestra} from "../../actions/orchestra";


const OrchestraDetails = ({currentId}) => {



    const classes = useStyles()
    const {orchestraId} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const location = useLocation();
    let orchestra = location.state;

    const openDiscography = () => {
        //dispatch(getRecommended(movie.tmdbID))
        navigate(`/orchestra/${orchestra.id}/discography`, {state: orchestra})

    };

    const sendRegistration = () => {
        console.log("sad")

    }


    const data = {
        "events": orchestra.events,
        "currentId": currentId

    }

    const deleteOrchestraBtn = (event) => {

        event.preventDefault();

        dispatch(deleteOrchestra(orchestra.id));




        navigate('/orchestra/')



    };


    return (

        <Paper style={{padding: '20px', borderRadius: '15px', margin: '10px'}} elevation={6}>
            <div className={classes.card}>
                <div className={classes.section}>

                    <Grid container direction="column" justifyContent="center" alignItems="center">
                        <Typography variant="h3" component="h2">{orchestra.name}</Typography>
                        <Typography gutterBottom variant="body1"
                                    component="p">Founded: {orchestra.founded_date}</Typography>
                        <Typography variant="h6">Web page: {orchestra.web_page}</Typography>
                    </Grid>

                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Button variant="contained" color="primary" onClick={openDiscography}>
                            See discography
                        </Button>
                        <Button variant="text" color="primary" startIcon={<Add/>}
                                onClick={sendRegistration}>
                            Send application to join
                        </Button>
                    </Grid>
                    <Divider style={{margin: '20px 0'}}/>


                </div>

            </div>
            <div>
                <UserCardLayout users={orchestra.members}/>
                <EventCardsLayout data={data}/>
                <Button variant="contained"  color="primary" onClick={deleteOrchestraBtn}>
                    Delete orchestra
                </Button>

            </div>



        </Paper>
    )


}

export default OrchestraDetails