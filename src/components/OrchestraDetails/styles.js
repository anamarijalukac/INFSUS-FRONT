import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    media: {
        borderRadius: '20px',
        objectFit: 'cover',
        width: '100%',
        maxHeight: '500px',

    },
    card: {
        display: 'flex',

        width: '100%',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            flexDirection: 'column',
        },
    },
    section: {
        borderRadius: '20px',
        margin: '10px',
        flex: 1,

        display: 'flex',

    },
    imageSection: {
        marginLeft: '20px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },
    recommendedPosts: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    loadingPaper: {
        display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
    },
    sub: {

        marginTop: '2rem',
        paddingLeft: "200px",
        paddingRight: "200px",
        width: '100%',
        backgroundColor: 'rgba(255,153,0,0.88)',
        color: 'rgb(0,0,0)',
        fontFamily: 'Roboto',
        fontWeight: 300,
        fontSize: "20px",
        textAlign: "center",
        alignItems: 'center',
        justifyContent: "center"


    },

    heading: {
        paddingBottom: 0,
        marginBottom: 0,
        marginTop: 0,
        padding: 30,
        paddingLeft: 200,
        width: '100%',
        backgroundColor: 'rgb(0,0,0)',
        color: 'rgb(255,153,0)',
        fontFamily: 'roboto',
        fontWeight: 600,
        fontSize: "40px",
        textAlign: "left",
        alignItems: 'center',


    },
    form: {

        display: "grid",
        direction: "column",
        justifyContent: "center",
        alignItems: "center",

    },
}));
