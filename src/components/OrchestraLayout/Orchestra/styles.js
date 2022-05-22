import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({

    date: {

        color: "whitesmoke",
    },
    title: {
        height: "50px",
        marginTop: "30px",
        marginBottom: "10px",
        fontFamily: 'Roboto',
        textDecoration: 'none',
        color: "whitesmoke"

    },
    text: {
        paddingLeft: '1rem',
        color: "whitesmoke",
    },
    buttonGroup: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center'
    },
    media: {
        borderRadius: '0.5rem 0.5rem 0 0',
        width: "100%",
        objectFit: "cover",


        aspectRatio: '4/3'
    },


    fragment: {
        display: 'flex',
        justifyContent: 'flex-end'
    },

    card: {

        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backgroundImage: 'linear-gradient(to right, #FC6A03, #ffffff)',

        backgroundBlendMode: "overlay",
        borderRadius: '0.5rem',
        boxShadow: '0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45)',
        paddingBottom: '1rem',
    },


    overlayQuote: {

        position: 'absolute',
        textAlign: 'center',
        top: '40%',
        left: '10%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '20px'
    },

    grid: {
        display: 'flex',
    },

    cardActions: {
        position: 'absolute',
        bottom: '10px',
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },





});