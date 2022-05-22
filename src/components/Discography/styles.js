import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    all: {backgroundColor: "black",

   },
    mainContainer: {
        display: 'flex',
        margin: 0,
        direction: "row",
        justifyContent: "space-evenly",
        alignItems: "end",
        width: "70%",
        float: "right",

        backgroundColor: 'black'
    },
    text: {

        color: "black",
        fontWeight: 400,
    },

    orchestraSticky: {


        position: "fixed",
        top: '50%',
        left: '0px',
        width: '100px',
        height: 'auto',
        zIndex: '9999',

        textAlign: 'center',
    },


    boxText: {
        paddingBottom: "30px"
    },
    box: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '10px',
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: 'center',


    },
    boxBelow: {
        marginTop: 20,
        padding: 20,
        width: '100%',
        backgroundColor: 'rgba(255,153,0)',
        color: 'white',
        display: 'flex',
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: 'center',

    },

    appBarSearch: {

        borderRadius: 4,
        display: 'flex',
        padding: '16px',

        width: 300,
        position: "relative",


    },
    actionDiv: {
        textAlign: 'center',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
}));