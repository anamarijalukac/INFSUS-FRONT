import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import {Container, Grid, Typography} from "@material-ui/core";
import useStyles from "./styles";
import UserCard from "./UserCard/UserCard";

const UserCardLayout = ({users}) => {

    const classes = useStyles();
    const {id} = useParams()
    const [wishlist, setWishlist] = useState([])
    console.log(users)


    return (


        <Container style={{padding: 0}}>
            <Typography
                variant="h4"
                className={classes.heading}
                gutterBottom
            >
                Orchestra members
            </Typography>


            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"

                  style={{backgroundColor: "black"}}>
                {users.map((user) => user == null ? <div/> : (

                        <UserCard user={user}/>


                    )
                )}
            </Grid>


        </Container>


    );


}

export default UserCardLayout