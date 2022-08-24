import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import AppsIcon from '@mui/icons-material/Apps';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import { makeStyles } from '@mui/styles';
import {connect} from 'react-redux'

const useStyle = makeStyles({

    keepBox: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', 
    alignItems: 'center',width:'9%'},

    keep: { display: 'flex', textAlign: 'center', },

    '@media only screen and (min-width: 320px) and (max-width: 480px) ': {
        keepBox: {
            display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItem: 'center',width:'17%'
        },
        keep: {
            width: '100%',
        },
        keepImg: { width: '100%', },
        searchBox: {
            display: 'none'
        },
        searchBox1: {
            display: 'none'
        },
        emptyBox1: { display: 'none' },
        emptyBox2: { display: 'none' },
        icons: {
            display: 'none'
        },
    },
    '@media only screen and (min-width: 481px) and (max-width: 600px)': {
        keepBox: {
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItem: 'center', width: '50%'
        },
        searchBox: {
            width:'30%'
        },
        searchBox1: {
            width: '50%'
        },
        emptyBox1: { display: 'none' },
        emptyBox2: { display: 'none' },
        icons: {
            display: 'none'
        },
    },
    '@media only screen and (min-width: 601px) and (max-width: 768px)': {
        keepBox: {
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItem: 'center', width: '15%'
        },
        searchBox: {
           
            width:'30%'
        },
        searchBox1: {
            width: '50%'
        },
        emptyBox1: { display: 'none' },
        emptyBox2: { display: 'none' },
        icons: {
            display: 'none'
        },
    },
    '@media only screen and (min-width:769px) and (max-width:1024px)': {
        keepBox: {
            display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItem: 'center'
        },
        keep: {
            width: '100%'
        },
        keepImg: { width: '100%', },
        searchBox: {
            width: '50%'
        },
        searchBox1: {
            width: '100%'
        },
        emptyBox1: { display: 'none' },
        emptyBox2: { display: 'none' },
        icons: {
            display: 'flex', flexDirection: 'row', width: '40%', justifyContent: 'space-between'
        },
    },
})

function Header(props) {
    const classes = useStyle();
    const openMenu = () => {
        props.listenToHeader()
    }

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'rgba(0,0,0,.05)',
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '70ch',
                
            },
        },
    }));


    return (
        <div>

            <div className="App"  >
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="fixed" color="transparent" >
                        <Toolbar>
                            <IconButton className={classes.menuButton}
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon onClick={openMenu} />
                            </IconButton>

                            <Box className={classes.keepBox}>
                                <img className={classes.keepImg} src="../keep.png" alt="" />
                                <Box className={classes.keep}>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                            component="div"
                                        sx={{ display: { sm: 'block' } }}
                                    >
                                        {props.title}

                                    </Typography>
                                </Box>
                            </Box>
                            <Box className={classes.emptyBox1} sx={{ width: '5%' }}> </Box>

                            <Search className={classes.searchBox}>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <Box className={classes.searchBox1}>
                                    <StyledInputBase
                                        placeholder="Search…" 
                                        inputProps={{ 'aria-label': 'search' }} sx={{display: {xs:'none',sm:'flex',md:'block' }}}
                                    />
                                </Box>
                            </Search>

                            <Box sx={{ flexGrow: 1 }} />
                            <Box className={classes.icons} sx={{ display: { md: 'flex' } }}>
                                <IconButton size="large" color="inherit">
                                    <Badge color="error">
                                        <RefreshIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton size="large" color="inherit">
                                    <Badge color="error">
                                        <ViewStreamIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton size="large" color="inherit">
                                    <Badge color="error">
                                        <SettingsIcon />
                                    </Badge>
                                </IconButton>

                                <Box className={classes.emptyBox2} sx={{ width: '5vw' }}> </Box>

                                <IconButton
                                    size="large"
                                    color="inherit"
                                >
                                    <Badge color="error">
                                        <AppsIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    // aria-label="account of current user"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </Box>

                            <Box className={classes.moreIcon} sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        title: state.drawerReducer.title
    }
}
export default connect(mapStateToProps)(Header)