import React, {useState} from 'react'
import {Button, Container, TextField, Typography} from "@material-ui/core";
import useStyles from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {createOrchestra} from "../../actions/orchestra";
import UserCard from "../UserCardsLayout/UserCard/UserCard";

const UserProfile = ({user}) => {




    const classes = useStyles();
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const createOrchestraBox = () => {
        setShow(prev => !prev)
    };

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
            members: [],
            leader: null,

        };
        console.log(defaultValues)
        dispatch(createOrchestra(defaultValues));
        setDate("")
        setWebpage("")
        setName("")


    };


    return (


        <Container style={{padding: 0}}>
            <Typography
                variant="h4"
                className={classes.heading}
                gutterBottom
            >
                Profile
            </Typography>

            <UserCard user={user}/>


            {!show &&
            <Container>
                <Button variant="contained" style={{top: '30px'}} color="primary" onClick={createOrchestraBox}>
                    Create new orchestra
                </Button>


            </Container>

            }
            {show &&
            <Container className={classes.form}>

                <Typography
                    variant="h5"
                    className={classes.sub}
                    gutterBottom
                >
                    Create new orchestra
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


        </Container>


    );


}

export default UserProfile