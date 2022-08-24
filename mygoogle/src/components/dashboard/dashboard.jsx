import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Drawer1 from '../drawer/drawer';
import Header from '../header/header';
import { getNoteList } from '../services/dataService';
import TakeNote1 from '../takeNote1/takenote1';
import TakeNote2 from '../takeNote2/takeNote2';
import TakeNote3 from '../takeNote3/takeNote3';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';

const useStyle = makeStyles({
    '@media only screen and (min-width: 320px) and (max-width: 480px) ':{
        dashBoardBox:{
            width:'50vw',
            marginLeft:'100px !important',
            border:'1px solid green'
        }
    },
    '@media only screen and (min-width: 481px) and (max-width: 768px)': {
        dashBoardBox:{
            // border:'1px solid blue',
            width:'30vw',
            marginLeft:'90px !important',
            display:'flex',
            flexDirection:'row'
        }
    },
    '@media only screen and (min-width:769px) and (max-width:1024px)': {
        dashBoardBox:{
            // border:'1px solid blue',
            width:'25vw',
            marginLeft:'90px !important',
            display:'flex',
            flexDirection:'row'
        }
    },
})

//here dashboard is parent
function Dashboard() {

    const classes = useStyle();

    //here our initial value is false
    const [toggle, setToggle] = useState(false)
    const [noteList, setNoteList] = useState([])
    const [drawerToggle, setDrawerToggle] = useState(false)
    const [currntNoteOption, setCurrentNoteOption] = useState('Notes')

    const listenToDrawer = (noteOptionListener) => {
        setCurrentNoteOption(noteOptionListener)
    }

    const listToTakeNoteTwo = () => {
        setToggle(true)
    }
    const listToTakeNote = () => {
        setToggle(false)
    }

    const getNote = () => {
        getNoteList().then((response) => {

            let filterNotes = []
            if (currntNoteOption === 'Notes') {
                //here we get an array only
                filterNotes = response.data.data.data.filter((notes) => {
                    if (notes.isArchived === false && notes.isDeleted === false)
                    return notes
                })
            }
            else  if (currntNoteOption === 'Archive') {
                filterNotes = response.data.data.data.filter((notes) => {
                    if (notes.isArchived === true && notes.isDeleted === false)
                    return notes
                })
            }
            else  if (currntNoteOption === 'Trash') {
                filterNotes = response.data.data.data.filter((notes) => {
                    if (notes.isArchived === false && notes.isDeleted === true)
                    return notes
                })
            }

            console.log(response);
            //here array is stored
            setNoteList(filterNotes)
        }).catch((error) => { console.log(error) })
    }

    useEffect(() => {
        getNote()
    }, [currntNoteOption])
   
    // console.log(noteList, "note list printed");

    const autoRefresh = () => {
        getNote()
    }

    const listenToHeader = () => {
        setDrawerToggle(!drawerToggle)
    }

    return (
        <div>
            <Header listenToHeader={listenToHeader} />
            <Drawer1 drawerToggle={drawerToggle} listenToDrawer={listenToDrawer} />
            <div>
                {
                    toggle ? <TakeNote2 listToTakeNote={listToTakeNote} /> : <TakeNote1 listToTakeNoteTwo={listToTakeNoteTwo} />
                }
            </div>
           
            <Box className={classes.dashBoardBox} style={{ width: '76vw', height: 'auto', marginLeft: '240px', 
             display: 'flex', flexWrap: 'wrap',justifyContent:'flex-start',marginTop:'100px'}}>
                {
                    noteList.map((note) => (<TakeNote3 note1={note} autoRefresh={autoRefresh} />))
                    //here note1 is props
                    //rendering things write in ()
                }
            </Box>
        </div>
    )
}
export default Dashboard