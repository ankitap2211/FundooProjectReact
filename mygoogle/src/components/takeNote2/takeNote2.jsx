import React, { useState } from "react";
// import './takeNote2.css'
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ImageIcon from '@mui/icons-material/Image';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import Button from '@mui/material/Button';
import PushPinIcon from '@mui/icons-material/PushPin';
import { postNoteList } from "../services/dataService";
import ColorPopper from "../colorPopper/colorPopper";
import InputBase from '@mui/material/InputBase';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const useStyles = makeStyles({
    conatiner2: {
        width: '40vw', position: 'relative', top: '80px', left: '480px'
    },
    outerBox: {
        display: 'flex', width: '40vw', height: '20vh', justifyContent: 'space-evenly'
    },
    outerBox1: {
        display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: '100%'
    },
    innerBox: {
        display: 'flex', justifyContent: 'space-between'
    },
    box1: {
        width: '45%'
    },
    box2: {
        width: '20%'
    },
    innerBox1: {
        display: 'flex', justifyContent: 'space-evenly', width: '90%'
    },

})


function TakeNote2(props) {

    const classes = useStyles();

    const [userInfo, setUserInfo] = useState({ title: "", description: "", color: "", isArchived: false })

    const closeTakeNote = () => {
        props.listToTakeNote()
        console.log(userInfo);
        postNoteList(userInfo).then((response) => {
            console.log(response)
            props.autoRefresh()
        }).catch((error) => { console.log(error) })
    }

    const takeTitle = (event) => {
        setUserInfo(privousState => ({
            ...privousState,
            title: event.target.value
        }))
        console.log(event.target.value);
    }

    const takeDescription = (event) => {
        setUserInfo(privousState => ({
            ...privousState,
            description: event.target.value
        }))
        console.log(event.target.value);
    }

    const listenToColorPopper = (colour) => {
        setUserInfo(privousState => ({
            ...privousState,
            color: colour
        }))
        console.log(colour);
    }

    const archiveNote = () => {
        setUserInfo(previousState => ({
            ...previousState,
            isArchived: true
        }))
        console.log("Archived worked");
    }

    return (
        <div>
            <Paper className={classes.conatiner2} elevation={3} style={{ backgroundColor: userInfo.color }}>
                <Box className={classes.outerBox} >
                    <Box className={classes.outerBox1}>
                        <Box className={classes.innerBox}>
                            <Box className={classes.box1}>
                                <Box><InputBase placeholder="Title" onChange={takeTitle} /></Box>
                                <InputBase placeholder="Description" onChange={takeDescription} />
                            </Box>
                            <Box className={classes.box2}><PushPinIcon /></Box>
                        </Box>
                        <Box className={classes.innerBox1}>
                            <Box><AddAlertIcon fontSize='small' /></Box>
                            <Box><PersonAddAltIcon fontSize='small' /></Box>
                            <Box>
                                <ColorPopper listenToColorPopper={listenToColorPopper} action="create" />
                            </Box>
                            <Box><ImageIcon fontSize='small' /></Box>
                            <Box>
                                <ArchiveIcon fontSize='small' onClick={archiveNote} />
                            </Box>
                            <Box><MoreVertIcon fontSize='small' /></Box>
                            <Box><UndoIcon /></Box>
                            <Box><RedoIcon /></Box>
                            <Box><Button variant="Close" onClick={closeTakeNote}>Close</Button></Box>
                        </Box>
                    </Box>
                </Box>
            </Paper>

        </div>
    )
}
export default TakeNote2