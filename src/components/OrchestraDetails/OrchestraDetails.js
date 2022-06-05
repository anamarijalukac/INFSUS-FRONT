import React, {useState} from 'react';
import {Button, Container, Divider, Grid, Paper, TextField, Typography} from '@material-ui/core';
import {useDispatch} from "react-redux";
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import useStyles from './styles';
import UserCardLayout from "../UserCardsLayout/UserCardLayout";
import EventCardsLayout from "../EventCardsLayout/EventCardsLayout";
import {Add} from "@material-ui/icons";
import { deleteOrchestra, updateOrchestra} from "../../actions/orchestra";
import axios from "axios";




const OrchestraDetails = ({currentId}) => {

    const classes = useStyles()
    const {orchestraId} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const location = useLocation();
    let orchestra = location.state;




    const [show, setShow] = useState(false);
    const createOrchestraBox = () => {
        setShow(prev => !prev)
    }
    const [name, setName] = useState("")
    const [webpage, setWebpage] = useState("")
    const [date, setDate] = useState("")


    const handleSubmit = (event) => {

        setShow(prev => !prev)
        event.preventDefault();

        let defaultValues = {

            name: name,
            web_page: webpage,
            founded_date: date,
            members: null,
            leader: null,

        };
        console.log(defaultValues)
        console.log(orchestra.members)
        dispatch(updateOrchestra(orchestra.id,defaultValues));
        setDate("")
        setWebpage("")
        setName("")


    };








    const openDiscography = () => {
        //dispatch(getRecommended(movie.tmdbID))
        navigate(`/orchestra/${orchestra.id}/discography`, {state: orchestra})

    };

    const sendRegistration = (event) => {
        event.preventDefault();

        axios.post(`http://localhost:8080//orchestra//${orchestra.id}//sign-up//${currentId}`)
            .then(response => console.log(response));




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
                <Button variant="contained" color="primary" onClick={deleteOrchestraBtn}>
                    Delete orchestra
                </Button>

                {!show &&
                <Button variant="contained" color="primary" onClick={createOrchestraBox}>
                    Update orchestra
                </Button>}
                {show &&
                <Container className={classes.form}>

                    <Typography
                        variant="h5"
                        className={classes.sub}
                        gutterBottom
                    >
                        Update orchestra details
                    </Typography>


                    <Container className={classes.form}>


                        <TextField id="name-input" name="name" label="Name" type="text"
                                   value={name}
                                   onChange={(e) => {
                                       setName(e.target.value);
                                   }}
                        />
                        <TextField id="web" name="web" label="Web Page" type="text"
                                   value={webpage}
                                   onChange={(e) => {
                                       setWebpage(e.target.value);
                                   }}
                        />


                        <TextField id="date-input" name="date" label="Founded date" type="date"
                                   value={date}
                                   onChange={(e) => {
                                       setDate(e.target.value);
                                   }}

                                   InputLabelProps={{
                                       shrink: true,
                                   }}/>


                    </Container>

                    <Button variant="contained" style={{top: '30px'}} color="primary" onClick={handleSubmit}>
                        done
                    </Button>


                </Container>


                }


            </div>


        </Paper>
    )


}

export default OrchestraDetails