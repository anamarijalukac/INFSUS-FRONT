import React, {useState} from "react";
import useStyles from "./styles";
import {Button, ButtonGroup, Card, CardHeader, CardMedia, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import img from "../../../images/tamburice-home.jpg";


const Orchestra = ({orchestra}) => {
    const classes = useStyles();
    const [clickedW, setClickedW] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const openDetails = (e) => {
        //dispatch(getRecommended(movie.tmdbID))
        navigate(`/orchestra/${orchestra.id}`, {state: orchestra})

    };

    const openDiscography = (e) => {
        //dispatch(getRecommended(movie.tmdbID))
        navigate(`/orchestra/${orchestra.id}/discography`, {state: orchestra})

    };


    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={img}/>
            <CardHeader className={classes.title} title={orchestra.name}/>


                <b className={classes.text}>Founded date:</b>
                <Typography className={classes.text} variant={"body2"} gutterBottom
                            color="textSecondary"> {orchestra.founded_date}</Typography>
                <b className={classes.text}>Web page:</b>
                <Typography className={classes.text} variant={"body2"} gutterBottom> {orchestra.web_page}
                </Typography>



            <ButtonGroup className={classes.buttonGroup}>
                <Button variant="contained" color="primary" onClick={openDetails}>
                    More details
                </Button>
                <Button variant="contained" color="secondary" onClick={openDiscography}>
                    See discography
                </Button>
            </ButtonGroup>


        </Card>

    )
}
export default Orchestra;

