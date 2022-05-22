import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({


    media: {
        height: "100%",
        paddingTop: '85%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        backgroundBlendMode: 'darken',
        backgroundSize: "cover"


    },
    card: {

        backgroundColor: "whitesmoke",
        borderRadius: '6px',
        display: "inline-block",
        height: '300px',
        margin: '1rem',
        position: 'relative',
        width: '150px',
        boxShadow: '0 12px 13px rgba(0,0,0,0.16), 0 12px 13px rgba(0,0,0,0.16)',
        transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
    },
    title: {
        textAlign: "center",
        color: '#2D354A',
        fontFamily: 'roboto',
        weight: '300'
    },
    email: {
        textAlign: "center",
        color: '#7C8097',
        fontFamily: 'roboto',
        weight: '100',
        fontSize: '12px'
    },
    mainContainer: {
        display: 'grid',

        justifyContent: "center",
        alignItems: "center",
        width: '100%',


    },
    instrument: {
        border: "none",
        alignItems: "center",
        height: '30px',
        color: '#ffffff',
        textAlign: "center",
        backgroundImage: 'linear-gradient(to top right, #FC6A03, #F54BA5)',
        width: '100px',
        fontSize: '16px',
        borderRadius: '30px',
        boxShadow: '0 13px 26px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.16)',
        marginTop: '16px',
        justifyContent: "center"
    },
    profile: {

        borderRadius: '100%',
        marginTop: '60px',

        height: '128px', width: "100%",
        objectFit: "fill",


        aspectRatio: '4/3'
    },

})
;