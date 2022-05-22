import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "start",
        alignItems: 'center',
    },
    heading: {



        color: 'rgb(255,153,0)',
        fontFamily: 'Roboto',
        fontWeight: 600,
        fontSize: "30px",
        textAlign: "center",
        alignItems: 'center',



    }, media: {

        width: "150px",
        height: "150px",
        objectFit: "cover",
        marginLeft: '30px',
        aspectRatio: '4/3',
        marginRight: "10px"
    },
    box: {
        backgroundColor: 'rgb(0,0,0)',
        width: '100%',
        display: 'inline-flex',
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    tracklist: {



        color: 'rgb(255,255,255)',
        fontFamily: 'Roboto',
        fontWeight: 300,
        fontSize: "20px",



    },
}));