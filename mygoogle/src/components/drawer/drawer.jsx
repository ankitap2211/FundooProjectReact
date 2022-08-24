import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import {connect} from 'react-redux'

const drawerWidth = 240;

const openedMixin = (theme) => ({
  marginTop: 63,
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  marginTop: 63,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function Drawer1(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const selectNote = (noteOption) => {
    props.listenToDrawer(noteOption)
    props.dispatch({
      type: `${noteOption}`
    })
  }


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Drawer variant="permanent" open={props.drawerToggle} >

        <Divider />
        <List>
          <ListItem sx={{ display: 'flex', borderRadius: '0px 30px 30px 0px', backgroundColor: '#feefc3' }}>

            <ListItemButton onClick={() => selectNote('Notes')}//here Notes value is same as primary="Notes" 
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                //   border: '1px solid red'
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  // border: '1px solid green'
                }}
              >
                <LightbulbIcon sx={{ position: 'fixed', top: '90px', fontSize: "25px", color: 'black' }} />
              </ListItemIcon>
              <ListItemText primary="Notes" sx={{ position: 'absolute', left: '80px' }} />
            </ListItemButton>
          </ListItem>

          <ListItem sx={{ display: 'flex', borderRadius: '0px 30px 30px 0px' }}>

            <ListItemButton onClick={() => selectNote('Reminders')}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                //   border: '1px solid red'
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  // border: '1px solid green'
                }}
              >
                <NotificationsIcon sx={{ position: 'fixed', top: '155px', fontSize: "25px", color: 'black' }} />
              </ListItemIcon>
              <ListItemText primary="Reminders" sx={{ position: 'absolute', left: '80px' }} />
            </ListItemButton>
          </ListItem>

          <ListItem sx={{ display: 'flex', borderRadius: '0px 30px 30px 0px' }}>

            <ListItemButton onClick={() => selectNote(' ')}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                //   border: '1px solid red'
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  // border: '1px solid green'
                }}
              >
                <EditIcon sx={{ position: 'fixed', top: '215px', fontSize: "25px", color: 'black' }} />
              </ListItemIcon>
              <ListItemText primary="Edit" sx={{ position: 'absolute', left: '80px' }} />
            </ListItemButton>
          </ListItem>

          <ListItem sx={{ display: 'flex', borderRadius: '0px 30px 30px 0px' }}>

            <ListItemButton onClick={() => selectNote('Archive')}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                //   border: '1px solid red'
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  // border: '1px solid green'
                }}
              >
                <ArchiveIcon sx={{ position: 'fixed', top: '285px', fontSize: "25px", color: 'black' }} />
              </ListItemIcon>
              <ListItemText primary="Archive" sx={{ position: 'absolute', left: '80px' }} />
            </ListItemButton>
          </ListItem>

          <ListItem sx={{ display: 'flex', borderRadius: '0px 30px 30px 0px' }}>

            <ListItemButton onClick={() => selectNote('Trash')}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                //   border: '1px solid red'
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  // border: '1px solid green'
                }}
              >
                <DeleteIcon sx={{ position: 'fixed', top: '350px', fontSize: "25px", color: 'black' }} />
              </ListItemIcon>
              <ListItemText primary="Trash" sx={{ position: 'absolute', left: '80px' }} />
            </ListItemButton>
          </ListItem>
        </List>

      </Drawer>
    </Box>
  );
}

export default connect()(Drawer1)
