import React, {useState} from "react";
import {Box, Button, ButtonGroup, Card, CardMedia, Typography} from "@material-ui/core";
import {Check, Delete} from "@material-ui/icons";
import useStyles from "./styles";
import {useParams} from "react-router-dom";


const Song = ({song}) => {
    const classes = useStyles();


    return (
        <Card className={classes.card}>




                <Typography className={classes.text} variant="p">{song.name}</Typography>
                <Typography className={classes.text} variant="p">{song.date}</Typography>
                <Typography className={classes.text} variant="p">{song.artist}</Typography>




        </Card>

    )
}
export default Song;