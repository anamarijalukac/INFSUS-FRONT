import React, {useState} from 'react'
import {Button, Container, TextField, Typography} from "@material-ui/core";
import useStyles from "./styles";
import {useDispatch} from "react-redux";
import {createOrchestra} from "../../actions/orchestra";

const UserProfile = ({user}) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const createOrchestraBox = () => {
        setShow(prev => !prev)


    };
    let defaultValues = {
        id:"1",
        name: "",
        founded_date: '',
        members: [],
        leader:null,

    };


    const handleSubmit = (event) => {

        setShow(prev => !prev)
        event.preventDefault();
        dispatch(createOrchestra(formValues));



        defaultValues = {
            id:"1",
            name: "",
            founded_date: '',
            members: [],
            leader:null,

        };
    };

    const [formValues, setFormValues] = useState(defaultValues)


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
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
                    <TextField id="name-input" name="name" label="Name" type="text" value={formValues.name}
                               onChange={handleInputChange}
                    />


                    <TextField id="date-input" name="date" label="Founded date" type="date" onChange={handleInputChange}
                               value={formValues.founded_date} InputLabelProps={{
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