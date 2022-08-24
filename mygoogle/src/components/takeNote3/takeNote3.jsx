import React from "react";
// import './takeNote3.css'
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ImageIcon from '@mui/icons-material/Image';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PushPinIcon from '@mui/icons-material/PushPin';
import ColorPopper from "../colorPopper/colorPopper";
import InputBase from '@mui/material/InputBase';
import DeleteIcon from '@mui/icons-material/Delete';
import { archivedNotes, trashNotes, updateNotes } from "../services/dataService";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';

const useStyle = makeStyles({
    container3: {
        border: '1px solid lightgray', display: 'flex', width: '22vw', height: '20vh',
        justifyContent: 'space-evenly', borderRadius: '8px', position: 'relative', margin: '5px', left: '20px'
    },
    outerBox3: {
        display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: '100%'
    },
    innerBox3: {
        display: 'flex', justifyContent: 'space-evenly'
    },
    innerBox4: {
        display: 'flex', justifyContent: 'space-evenly'
    },
    outerModal: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        // width:'100%',border:'1px solid black'
    },
    innerModal: {
        display: 'flex',
        flexDirection: 'column', width: '90%'
    },
    modal1: { display: 'flex', flexDirection: 'row' },
    
    '@media only screen and (min-width: 320px) and (max-width: 480px)': {
        container3: {
            width: '55vw',
            display: 'flex',
            border: '1px solid red'
        },
    },
    '@media only screen and (min-width: 481px) and (max-width: 768px)': {
        container3: {
            // border:'1px solid black',
            display: 'flex',
            flexDirection: 'row',
            width: '35vw'
        },
    },
    '@media only screen and (min-width:769px) and (max-width:1024px)': {
        container3: {
            // border:'1px solid black',
            display: 'flex',
            flexDirection: 'row',
            width: '20vw'
        },
    },

});

function TakeNote3(props) {

    const classes = useStyle();

    const [userInfo, setUserInfo] = useState({ noteId: "", title: "", description: "" })

    const listenToColorUpdate = () => {
        props.autoRefresh()
    }

    const updateArchived = (id) => {
        let archiveObj = { noteIdList: [id], isArchived: true }
        archivedNotes(archiveObj).then((response) => {
            console.log(response)
            props.autoRefresh()
        }).catch((error) => { console.log(error) })
    }

    const trashNote = (id) => {
        let trashObj = { noteIdList: [id], isDeleted: true }
        trashNotes(trashObj).then((response) => {
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

    const saveUpdates = () => {
        updateNotes(userInfo).then((response) => {
            console.log(response)
        }).catch((error) => { console.log(error) })
        setOpen(false);
    }

    const Boxstyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 180,
        border: '1px solid lightgray',
        boxShadow: 24,
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '8px',
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = (userInfo) => { setOpen(true); setUserInfo({ noteId: userInfo.id, title: userInfo.title, description: userInfo.description }) };
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Paper elevation={3} />

            <Box className={classes.container3} style={{ backgroundColor: props.note1.color }}>

                <Box className={classes.outerBox3}>
                    <Box className={classes.innerBox3}>
                        <Box onClick={() => handleOpen(props.note1)}>
                            <Box><InputBase placeholder={props.note1.title} /></Box>
                            <InputBase placeholder={props.note1.description} />
                        </Box>
                        <Box><PushPinIcon /></Box>
                    </Box>
                    <Box className={classes.innerBox4}>
                        <Box><AddAlertIcon fontSize='small' /></Box>
                        <Box><PersonAddAltIcon fontSize='small' /></Box>
                        <Box>
                            <ColorPopper id={props.note1.id} action="update" listenToColorUpdate={listenToColorUpdate} />
                        </Box>
                        <Box>
                            <DeleteIcon fontSize='small' onClick={() => trashNote(props.note1.id)} />
                        </Box>
                        <Box>
                            <ArchiveIcon fontSize='small' onClick={() => updateArchived(props.note1.id)} />
                        </Box>
                        <Box><MoreVertIcon fontSize='small' /></Box>
                    </Box>
                </Box>
            </Box>
            <Paper />


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={Boxstyle} style={{ backgroundColor: props.note1.color }}>
                    <Box className={classes.modal1}>
                        <Box className={classes.innerModal}>
                            <Box><InputBase defaultValue={userInfo.title} onChange={takeTitle} /></Box>
                            <InputBase defaultValue={userInfo.description} onChange={takeDescription} />
                        </Box>
                        <Box className={classes.pinModal}><PushPinIcon /></Box>
                    </Box>
                    <Box className={classes.outerModal}>
                        <Box><AddAlertIcon /></Box>
                        <Box><PersonAddAltIcon /></Box>
                        <Box><ColorLensIcon /></Box>
                        <Box><ImageIcon /></Box>
                        <Box><ArchiveIcon /></Box>
                        <Box><MoreVertIcon /></Box>
                        <Box><UndoIcon sx={{ color: 'lightgrey' }} /></Box>
                        <Box><RedoIcon sx={{ color: 'lightgrey' }} /></Box>
                        <Box><Button variant="Close" onClick={saveUpdates}>Close</Button></Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}
export default TakeNote3