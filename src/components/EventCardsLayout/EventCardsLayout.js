import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import {Container, Grid, Typography} from "@material-ui/core";
import useStyles from "./styles";
import EventCard from "./EventCard/EventCard";


const EventCardsLayout = ({data}) => {


    const events = data.events
    const currentId = data.currentId

    const classes = useStyles();
    const {id} = useParams()
    const [wishlist, setWishlist] = useState([])


    return (


        <Container style={{padding: 0}}>

            <Container item className={classes.container}>
                <Typography variant="h3" className={classes.heading} gutterBottom>
                    Events
                </Typography>
                <Typography variant="h5" className={classes.sub} gutterBottom>
                    Find out where to see us next...
                </Typography>
            </Container>


            <Grid container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"

            >
                {events.map((event) => event == null ? <div/> : (

                        <EventCard data={{
                            "event": event,
                            "currentId": currentId

                        }}
                        />


                    )
                )}
            </Grid>


        </Container>


    );


}

export default EventCardsLayout