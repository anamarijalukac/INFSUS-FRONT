import React, {useState} from "react";
import {Card, CardMedia, Grid, Typography} from "@material-ui/core";
import useStyles from "./styles";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";


const UserCard = ({user}) => {
    const classes = useStyles();
    const [clicked, setClicked] = useState(false)
    const [deleteClicked, setDeleteClicked] = useState(false)
    const {id} = useParams()
    const dispatch = useDispatch();


    return (


        <Card className={classes.card}>

            <CardMedia className={classes.profile} image={user.image}> </CardMedia>

            <Grid className={classes.mainContainer}>
                <Typography className={classes.title}>{user.name}</Typography>
                <Typography className={classes.email}>{user.email}</Typography>
                <Typography className={classes.instrument}>{user.instrument.name}</Typography>


            </Grid>

        </Card>

    )
}
export default UserCard;