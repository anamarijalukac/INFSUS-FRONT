import React, {useEffect, useState} from "react";
import {Container, Grid, Typography} from "@material-ui/core";
import useStyles from "./styles";
import Orchestra from "./Orchestra/Orchestra";
import img from "../../images/tamburice-home.jpg"
import imguser from "../../images/userimg.png"
import {useDispatch, useSelector} from "react-redux";
import {getOrchestras} from "../../actions/orchestra";


let Instrument=  {
    "name": "instrument"
}
let User = {
    "name": "user123",
    "email": "user1email",
    "address": "user1address",
    "password": "user1password",
    "instrument": Instrument,
    "image": imguser,
}


let Song = {
    "name": "prvapjesma",
    "date": "1.3.2044.",
    "artist": "muzicar",
    "id": "3456"

}
let Album = {

    "name": "prvialbum",
    "year": "2000.",
    "image":img,
    "songs": [Song, Song]

}


let Discography = {

    "albums": [Album, Album,Album,Album]
}
let Comment = {

    "commentText": "Nice event!",
    "commentatorName": "Commentator"

}
let Event = {

    "name": "eventtt",
    "type": "eventtype",
    "date": "4.5.2022.",
    "description": " Let's spread the joy , here is Christmas , " +
        "the most awaited day of the year.Christmas Tree is what one need the most. " +
        "Here is the correct tree which will enhance your Christmas.",
    "comments": [
        Comment, Comment, Comment, Comment, Comment, Comment, Comment, Comment, Comment, Comment, Comment
    ]

}


let OrchestraDemo = {
    "id": "1",
    "name": "orkestar",
    "founded_date": "1.1.2022",
    "web_page": "www.o.com",
    "members": [
        User, User, User
    ],
    "discography": Discography,
    "events": [
        Event, Event
    ],
    "image": img,
}


let OrchestraDemo2 = {
    "id": "2",
    "name": "orkestar",
    "founded_date": "1.1.2022",
    "web_page": "www.o.com",
    "members": [
        User, User, User
    ],
    "discography": Discography,
    "events": [
        Event, Event
    ],
    "image": img,
}


let OrchestraDemo3 = {
    "id": "3",
    "name": "orkestar",
    "founded_date": "1.1.2022",
    "web_page": "www.o.com",
    "members": [
        User, User, User
    ],
    "discography": Discography,
    "events": [
        Event, Event
    ],
    "image": img,
}


let OrchestraDemo4 = {
    "id": "4",
    "name": "orkestar",
    "founded_date": "1.1.2022",
    "web_page": "www.o.com",
    "members": [
        User, User, User
    ],
    "discography": Discography,
    "events": [
        Event, Event
    ],
    "image": img,
}


const OrchestraLayout = () => {

    const orchestras = useSelector((state) => state.orchestra);



    const classes = useStyles();

    return (
        <Container>
            <Container item className={classes.orchestraSticky}>
                <Typography className={classes.text} variant="h3">ORCHESTRAS</Typography>
            </Container>


            <Grid className={classes.mainContainer} container alignItems={"stretch"} spacing={3}>

                {orchestras.map((orchestra) => (


                        <Grid key={orchestra.id} item xs={4}>

                            <Orchestra orchestra={orchestra}/>
                        </Grid>
                    )
                )}
            </Grid>
        </Container>

    );
}
export default OrchestraLayout;