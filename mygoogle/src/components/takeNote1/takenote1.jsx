import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import BrushIcon from '@mui/icons-material/Brush';
import ImageIcon from '@mui/icons-material/Image';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    mainBox: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '40vw',
        height: '10vh',
        position: 'relative',
        top: '50px',
        left: '470px',
        borderRadius: '8px',
        justifyContent: 'center', alignItem: 'center',

    },
    container1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '40vw',
        height: '10vh',
    },
    box1: {
        width: '60%',
        display: 'flex'
    },
    item1: {
        width: '10%'
    },
    item2: {
        width: '10%'
    },
    item3: {
        width: '10%'
    },
    '@media only screen and (min-width: 320px) and (max-width: 480px)': {
        mainBox: {
            width: '60vw',
            left: '110px',
            // border: '1px solid black'
        },
        container1: {
            width: '60vw',
        }
    },

    '@media only screen and (min-width: 481px) and (max-width: 768px)': {
        mainBox: {
            width: '62vw',
            left: '110px',
            // border: '1px solid black'
        },
        container1: {
            width: '62vw',
        }
    },
    '@media only screen and (min-width:769px) and (max-width:1024px)': {
        mainBox: {
            width: '60vw',
            left: '130px',
            // border: '1px solid black'
        },
        container1: {
            width: '60vw',
        }
    },
})

function TakeNote1(props) {
    const openTakeNoteTwo = () => {
        props.listToTakeNoteTwo()
    }
    const classes = useStyles();
    return (
        <div>
            <Box className={classes.mainBox}>

                <Paper elevation={1} onClick={openTakeNoteTwo}>
                    <Box className={classes.container1}>
                        <Box className={classes.box1}>
                            Take Note..
                        </Box>
                        <Box className={classes.item1}><CheckBoxIcon /></Box>
                        <Box className={classes.item2}><BrushIcon /></Box>
                        <Box className={classes.item3}><ImageIcon /></Box>
                    </Box>
                </Paper>
            </Box>
        </div>
    )
}
export default TakeNote1
