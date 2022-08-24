import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import './signup.css'
import Box from '@mui/material/Box';
import { requirePropFactory } from "@mui/material";
import { signUp } from "../services/userService";

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    outerBox: {
        border: '1px solid lightgray', width: '58vw', height: '100vh', display: 'flex', flexDirection: 'row',
        justifyContent: 'space-evenly', position: 'relative', top: '40px', left: '200px', borderRadius: '12px 12px'
    },
    innerBox: {
        width: '65%', height: '95%', display: 'flex', flexDirection: 'column',
        justifyContent: 'space-evenly', position: 'relative', top: '10px'
    },
    logoBox: {
        width: '15%', height: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center'
    },
    g: {
        color: 'blue',
        fontSize: '25px'
    },
    o: {
        color: 'red',
        fontSize: '25px'
    },
    e: {
        color: 'red',
        fontSize: '25px'
    },
    l: {
        color: 'green',
        fontSize: '25px'
    },
    O: {
        color: 'yellow',
        fontSize: '25px'
    },
    create: {
        width: '49.1%', display: 'flex', justifyContent: 'center', alignItem: 'center'
    },
    validateBox1: {
        width: '95%', display: 'flex', justifyContent: 'space-between'
    },

    userName: {
        width: '95%'
    },
    label1: {
        width: '56.1%'
    },
    label2: {
        width: '66.5%', color: 'blue'
    },
    validateBox2: {
        width: '95%', display: 'flex', justifyContent: 'space-between'
    },
    label3: {
        width: '94%'
    },
    checkBox: {
        width: '32%'
    },
    buttonBox: {
        display: 'flex', justifyContent: 'space-around', width: '90%'
    },
    imgSection: {
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItem: 'center'
    },
    '@media only screen and (min-width: 320px) and (max-width: 480px)': {
        outerBox: {
            border: 'none',
            width: '70%',
            left: '0px',
        },
        imgSection: {
            display: 'none'
        },
        innerBox: {
            // border:'1px solid red',
            width: '80%'
        },
        create: {
            width: '120%',
            display: 'flex',
            flexDirection: 'row',
            // border: '1px solid green',
        },
        logoBox: {
            // border: '1px solid red',
            width: '40%'
        },
        validateBox1: {
            display: 'flex',
            flexDirection: 'column'
        },
        first: {
            width: '140%',
            // border:'1px solid red'
        },
        last: {
            width: '140%',
            // border:'1px solid blue',
            marginTop: '10px'
        },
        userName: {
            width: '132%',
            // border: '1px solid black',
            marginTop: '10px'
        },
        label1: {
            marginTop: '10px',
            width: '100%', fontSize: '12px'
        },
        label2: {
            width: '100%', fontSize: '13px'
        },
        validateBox2: {
            display: 'flex',
            flexDirection: 'column',
        },
        label3: {
            width: '100%', fontSize: '10px', marginTop: '10px'
        },
        password: {
            width: '140%',
            // border:'1px solid red'
        },
        cpassword: {
            width: '140%',
            // border:'1px solid blue',
            marginTop: '10px'
        },
        checkBox: {
            width: '70%'
        },
        buttonBox: {
            width: '100%', margin: '5px'
        }
    },
    '@media only screen and (min-width: 481px) and (max-width: 768px)': {
        outerBox: {
            border: 'none',
            width: '100%',
            height: 'auto',
            left: '0px',
        },
        innerBox: {
            // border:'1px solid green',
            width: '80%'
        },
        imgSection: {
            display: 'none'
        },
        create: {
            width: '55%',
            display: 'flex',
            flexDirection: 'row',
            // border: '1px solid green',
        },
        logoBox: {
            // border: '1px solid red',
            width: '20%'
        },
        validateBox1: {
            display: 'flex',
            flexDirection: 'column',
        },
        first: {
            width: '100%',
            marginTop: '10px',
            // border:'1px solid red'
        },
        last: {
            width: '100%',
            marginTop: '10px',
            // border:'1px solid red'
        },
        userName: {
            width: '95%', marginTop: '10px',
            // border: '1px solid black'
        },
        label1: {
            marginTop: '10px',
            width: '50%', fontSize: '13px'
        },
        label2: {
            width: '65%', marginTop: '10px',
            // border:'1px solid red'
        },
        validateBox2: {
            width: '60%',
            display: 'flex',
            flexDirection: 'column',
        },
        label3: {
            width: '100%', fontSize: '13px', marginTop: '10px'
        },
        checkBox: {
            width: '50%'
        },
        buttonBox: {
            width: '80%', marginBottom: '10px'
        },
        TextField: {
            width: '100%'
        },
        password: {
            width: '160%',
            marginTop: '10px',
        },
        cpassword: {
            width: '160%',
            marginTop: '10px',
        },
    },
    '@media only screen and (min-width:769px) and (max-width:1024px)': {
        outerBox: {
            width: '90%',
            height: '120%',
            left: '10px',
        },
        innerBox: {
            width: '50%'
        },
        logoBox: {
            width: '25%'
        },
        create: {
            width: '71%', top: '0px'
        },
        validateBox1: {
            display: 'flex', justifyContent: 'space-between', width: '100%'
        },
        first: {
            width: '50%', marginRight: '10px'
        },
        last: {
            width: '50%'
        },
        userName: {
            marginTop: '10px', width: '100%'
        },
        label1: {
            width: '70%', marginTop: '0px', fontSize: '13px'
        },
        label2: {
            fontSize: '14px', width: '69%', marginTop: '0px'
        },
        label3: {
            width: '85%', fontSize: '12px', marginTop: '15px'
        },
        validateBox2: { width: '100%' },
        password: { marginRight: '10px' },
        checkBox: { width: '50%', fontSize: '10px' },
        buttonBox: { marginBottom: '10px' },
        nextButton: { marginBottom: '10px' },
        imgSection: { width: '30%' }

    }
})



const firstNameRegex = /^[A-Z]{1}[a-z]{2,}$/;

const lastNameRegex = /^[A-Z]{1}[a-z]{2,}$/;

const emailRegx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>([\].;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@]+\.)[^<>()[\].,;:\s@\"]{2,})$/;

const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z)-9]*).{8,}$/;

const cpasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z)-9]*).{8,}$/;

function Signup() {
    const classes = useStyles();
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        service: "advance"
    })

    const [regexObjects, setRegexObjects] = useState({
        firstNameBorder: false, firstNameHelper: "",
        lastNameBorder: false, lastNameHelper: "",
        emailBorder: false, emailHelper: "",
        passwordBorder: false, passwordHelper: "",
        cpasswordBorder: false, cpasswordHelper: ""
    })

    //for first name
    const takeFirstName = (event) => {
        setUserInfo(prevstate => ({
            ...prevstate,
            firstName: event.target.value
        }))
        console.log(event.target.value)
    }
    //for last name
    const takeLastName = (event) => {
        setUserInfo(prevstate => ({
            ...prevstate,
            lastName: event.target.value
        }))
        console.log(event.target.value)
    }
    //for email 
    const takeEmail = (event) => {
        setUserInfo(prevstate => ({
            ...prevstate,
            email: event.target.value
        }))
        console.log(event.target.value)
    }
    //For password
    const takePassword = (event) => {
        setUserInfo(prevstate => ({
            ...prevstate,
            password: event.target.value
        }))
        console.log(event.target.value)
    }
    //For confirm password
    const takeCpassword = (event) => {
        setUserInfo(prevstate => ({
            ...prevstate,
            cpassword: event.target.value
        }))
        console.log(event.target.value)
    }

    //for submit button
    const submitFile = () => {
        let fnameTest = firstNameRegex.test(userInfo.firstName)
        let lnameTest = lastNameRegex.test(userInfo.lastName)
        let emailTest = emailRegx.test(userInfo.email);
        let passwordTest = passwordRegex.test(userInfo.password);
        let cpasswordTest = cpasswordRegex.test(userInfo.cpassword);

        if (fnameTest === false) {
            setRegexObjects(privousState => ({
                ...privousState,
                firstNameBorder: true,
                firstNameHelper: "Enter first name"
            }))
        }
        else if (fnameTest === true) {
            setRegexObjects(privousState => ({
                ...privousState,
                firstNameBorder: false,
                firstNameHelper: ""
            }))
        }

        if (lnameTest === false) {
            setRegexObjects(privousState => ({
                ...privousState,
                lastNameBorder: true,
                lastNameHelper: "Enter first name"
            }))
        }
        else if (lnameTest === true) {
            setRegexObjects(privousState => ({
                ...privousState,
                lastNameBorder: false,
                lastNameHelper: ""
            }))
        }

        if (emailTest === false) {
            setRegexObjects(privousState => ({
                ...privousState,
                emailBorder: true,
                emailHelper: "Enter email Id"
            }))
        }
        else if (emailTest === true) {
            setRegexObjects(privousState => ({
                ...privousState,
                emailBorder: false,
                emailHelper: ""
            }))
        }

        if (passwordTest === false) {
            setRegexObjects(privousState => ({
                ...privousState,
                passwordBorder: true,
                passwordHelper: "Enter password Id"
            }))
        }
        else if (passwordTest === true) {
            setRegexObjects(privousState => ({
                ...privousState,
                passwordBorder: false,
                passwordHelper: ""
            }))
        }

        if (cpasswordTest === false) {
            setRegexObjects(privousState => ({
                ...privousState,
                cpasswordBorder: true,
                cpasswordHelper: "Enter password Id"
            }))
        }
        else if (cpasswordTest === true) {
            setRegexObjects(privousState => ({
                ...privousState,
                cpasswordBorder: false,
                cpasswordHelper: ""
            }))
        }

        if (fnameTest === true && lnameTest === true && emailTest === true && passwordTest === true
            && cpasswordTest === true) {
            signUp(userInfo).then((result) => {
                console.log(result)
            }).catch((error) => { console.log(error) })
            console.log("signup successfully")
        }
    }
    return (
        <div>
            <Box className={classes.outerBox}>

                <Box className={classes.innerBox}>
                    <Box className={classes.logoBox} sx={{}}>
                        <Box>
                            <span className={classes.g}>G</span>
                            <span className={classes.o}>o</span>
                            <span className={classes.O}>o</span>
                            <span className={classes.g}>g</span>
                            <span className={classes.l}>l</span>
                            <span className={classes.e}>e</span>
                        </Box>
                    </Box>
                    <Box className={classes.create}>
                        <Box>
                            <h3>Create your Google Account</h3>
                        </Box>
                    </Box>
                    <Box className={classes.validateBox1}>
                        <Box className={classes.first}>
                            <TextField id="outlined-basic" label="First Name" variant="outlined" size="small" fullWidth="true"
                                onChange={takeFirstName} error={regexObjects.firstNameBorder} helper={regexObjects.firstNameHelper} />
                        </Box>
                        <Box className={classes.last}>
                            <TextField id="outlined-basic" label="Last Name" variant="outlined" size="small" fullWidth="true"
                                onChange={takeLastName} error={regexObjects.lastNameBorder} helper={regexObjects.lastNameHelper} />
                        </Box>
                    </Box>
                    <Box className={classes.userName}>
                        <Box>
                            <TextField id="outlined-basic" label="Username" variant="outlined" size="small" fullWidth="true"
                                onChange={takeEmail} error={regexObjects.passwordBorder} helper={regexObjects.passwordHelper} />
                        </Box>
                    </Box>
                    <Box className={classes.label1}>
                        <Box>
                            You can use letters,numbers and periods
                        </Box>
                    </Box>
                    <Box className={classes.label2}>
                        <Box>
                            <h4>Use my cureent email address instead</h4>
                        </Box>
                    </Box>
                    <Box className={classes.validateBox2}>
                        <Box className={classes.password}>
                            <TextField id="outlined-basic" label="Password" variant="outlined" size="small" fullWidth="true"
                                onChange={takePassword} error={regexObjects.passwordBorder} helper={regexObjects.passwordHelper} />
                        </Box>
                        <Box className={classes.cpassword}>
                            <TextField id="outlined-basic" label="Confirm password" variant="outlined" size="small" fullWidth="true"
                                onChange={takeCpassword} error={regexObjects.cpasswordBorder} helper={regexObjects.cpasswordHelper} />
                        </Box>
                    </Box>
                    <Box className={classes.label3}>
                        <Box>
                            Use 8 or more characters with a mix of letters,numbers and symbols
                        </Box>
                    </Box>
                    <Box className={classes.checkBox}>
                        <Box>
                            <FormControlLabel control={<Checkbox default />} label="Show password" />
                        </Box>
                    </Box>
                    <Box className={classes.buttonBox}>
                        <Box>
                            <Button>Sign in instead</Button>
                        </Box>
                        <Box className={classes.nextButton}>
                            <Button variant="contained" onClick={submitFile}>Next</Button>
                        </Box>
                    </Box>
                </Box>

                <Box className={classes.imgSection}>
                    <img src={require('../account.png')} alt="" style={{ width: '100%', height: '35%' }} />
                    <Box>
                        One account.All of Google<br />
                        working for you.
                    </Box>
                </Box>
            </Box>

        </div>
    )
}
export default Signup