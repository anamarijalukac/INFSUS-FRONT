import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({

    card: {


        backgroundColor: 'rgba(255, 255, 255, 0.90)',
        textAlign: 'center',
        borderRadius: '5px',
        overflow: 'hidden',
        margin: '5em auto',
        height: '350px',
        width: '700px'
    },

    comments: {

        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "whitesmoke",
        marginBottom: '10px',


    },

    media: {
        height: "100%",
        paddingTop: '85%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        backgroundBlendMode: 'darken',
        backgroundSize: "cover"


    },
    title: {
        fontFamily: 'Bebas Neue',
        display: 'inline-block',
        position: 'relative',
        fontSize: '30px',
        color: '#344055',
        margin: '0',
    },
    text: {
        fontFamily: 'EB Garamond',
        textAlign: 'center',
        fontSize: '14px',
        paddingBottom: '1em',
        color: '#7d7d7d',
    },

    CommentText: {
        fontFamily: 'EB Garamond',
        textAlign: 'center',
        fontSize: '14px',
        color: '#7d7d7d',
    },

    CommentName: {
        fontFamily: 'EB Garamond',
        textAlign: 'right',
        fontSize: '18px',
        color: '#212121',
    },
    box: {

        position: 'relative',
        textAlign: 'left',
        overflow: 'hidden',
        padding: '30px',
        height: '100%',
        float: 'left',
        width: '40%',
        display: "block"


    },
    info: {
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        float: 'right',
        width: '50%',
        display: 'inline-block',



    },

    list: {


    position: 'relative',
    overflow: 'hidden',
    height: '100%',
    float: 'right',
    width: '50%',
    display: 'inline-block'
},



});