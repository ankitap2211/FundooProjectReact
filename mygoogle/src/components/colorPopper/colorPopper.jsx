import React from "react";
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { changesColorNotes } from "../services/dataService";

//colorpropper is child
function ColorPopper(props){

    const colors =["#2ECC71", "#AF7AC5", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F", "#AAB7B8", "#F1948A", "#2ECC71", "#F5B041"]

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
  
    const selectColor =(colour) =>{
        if(props.action === "create"){
            props.listenToColorPopper(colour, "create color")
        }
        else if (props.action === "update"){
            let inputColor = {noteIdList:[props.id], color:colour}
            changesColorNotes(inputColor).then((response) =>{
                console.log(response)
                //  props.autoRefresh()
            }).catch( (error) => {console.log(error)})
        }
        console.log(colour, "Update color");
    }

    return(
        <div>
            <ColorLensIcon  onClick={handleClick}   /> 
            <Popper id={id} open={open} anchorEl={anchorEl}>
             <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display:'flex' }}>
                    { 
                        colors.map((color) =>(
                        <div style={{height:25, width:25, borderRadius:100, backgroundColor:color, marginLeft:5}} 
                            onClick={() => selectColor(color)}>
                        
                        </div>
                        ))
                    }
            </Box>
            </Popper>

        </div>
    )
}
export default ColorPopper