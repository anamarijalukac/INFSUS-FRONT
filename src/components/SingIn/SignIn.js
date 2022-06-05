import React, {useState} from 'react'
import {Button, Container, TextField, Typography} from "@material-ui/core";
import useStyles from "./styles";
import {useNavigate} from "react-router-dom";


const SignIn = ({ signinfunction }) => {

    //const user = useSelector((state) => state.user);
    const [show, setShow] = useState(false);

    const navigate = useNavigate();


    const classes = useStyles();


    const handleSubmit = (event) => {

        event.preventDefault();
        console.log(formValues);
        if (formValues.email === "user@gmail.com" && formValues.password === "12345") {
            setShow(false)
            signinfunction("1")
            navigate(`/`)


        }
        if (formValues.email === "scossington4@engadget.com" && formValues.password === "dnS1Jw"){
            setShow(false)
            signinfunction("5")
            navigate(`/`)
        }
        if (formValues.email === "cfrankes5@furl.net" && formValues.password === "uAxGs2n"){
            setShow(false)
            signinfunction("6")
            navigate(`/`)
        }

        else {
            setShow(true)
            defaultValues = {
                email: "",
                password: ""
            };
        }

    };

    let defaultValues = {

        email: "",
        password: ""


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
                Sign in
            </Typography>


            <Container className={classes.form}>


                <Container className={classes.form}>
                    <TextField id="email-input" name="email" label="Email" type="text" value={formValues.email}
                               onChange={handleInputChange}
                    />


                    <TextField id="password-input" name="password" label="Password" type="password"
                               value={formValues.password}
                               onChange={handleInputChange}
                    />
                    {show &&
                    <Typography> Wrong email or password.</Typography>}


                </Container>

                <Button variant="contained" style={{top: '30px'}} color="primary" onClick={handleSubmit}>
                    SIGN IN
                </Button>


            </Container>


        </Container>


    );


}

export default SignIn