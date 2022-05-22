import React, {useState} from "react";
import {Box, Button, Card, List, ListItem, ListItemText, TextField, Typography} from "@material-ui/core";
import useStyles from "./styles";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";


const EventCard = ({data}) => {

    const event=data.event
    const currentId=data.currentId

    const classes = useStyles();
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');



    const {id} = useParams()
    const dispatch = useDispatch();

    const comments = event.comments

    const addCommentBtn = () => {
        setShow(prev => !prev)


    };
    const doneComment = () => {
        setShow(prev => !prev)
        //dispatch(addComment({text,currentId}))  ovo poziva action
        console.log({text})
        setText('')
    };


    return (
        <Card className={classes.card}>


            <Box className={classes.box}>
                <Typography className={classes.title} variant="h1">{event.name}</Typography>

                <Typography className={classes.text} variant="h4">{event.type}</Typography>
                <Typography className={classes.text} variant="h4">{event.date}</Typography>
                <Typography className={classes.text} variant="p">{event.description}</Typography>

                {!show &&
                <Button variant="contained" style={{top: '30px'}} color="primary" onClick={addCommentBtn}>
                    Add comment
                </Button>}
                {show &&
                <Button variant="contained" style={{top: '30px'}} color="primary" onClick={doneComment}>
                    Done
                </Button>}


            </Box>
            {!show &&
            <List style={{maxHeight: '100%', overflow: 'auto'}} className={classes.list}>

                {comments.map((comment) => comment == null ? <div/> : (
                        <>
                            <ListItem className={classes.comments}>
                                <ListItemText className={classes.CommentText}>{comment.commentText}</ListItemText>

                                <ListItemText className={classes.CommentName}>{comment.commentatorName}</ListItemText>
                            </ListItem>

                        </>

                    )
                )}

            </List>}
            {show &&

            <div className={classes.info}>

                <TextField value={text}

                           onChange={(e) => setText(e.target.value)}

                           fullWidth multiline label="Add your comment" variant="outlined"
                           style={{marginTop: '30px', paddingRight: '30px'}}/>
            </div>}

        </Card>

    )
}
export default EventCard;