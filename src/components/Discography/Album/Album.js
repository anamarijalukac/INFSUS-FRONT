import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import {CardMedia, Container, Divider, Grid, Typography} from "@material-ui/core";
import useStyles from "./styles";
import Song from "./Song/Song"


const Album = ({album}) => {

    const classes = useStyles();
    const {id} = useParams()
    const [wishlist, setWishlist] = useState([])

    let songs = album.songs


    return (

        <Container style={{padding: 10}} className={classes.box}>
            <CardMedia className={classes.media} image={album.image}/>

            <Typography variant="h1" className={classes.heading} gutterBottom>
                {album.name}
            </Typography>


            <Grid className={classes.mainContainer} container alignItems={"stretch"} spacing={3}><Typography
                variant="h5"
                className={classes.tracklist}
            >
                Tracklist
            </Typography>
                <Divider style={{margin: '10px 0', color:'white',}}/>

                {songs.map((song) => song == null ? <div/> : (

                        <Song song={song}/>


                    )
                )}
            </Grid>


        </Container>


    );


}

export default Album