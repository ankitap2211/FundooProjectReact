import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import './signin.css'
import Box from '@mui/material/Box';
import { login } from '../services/userService';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const emailRegx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>([\].;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@]+\.)[^<>()[\].,;:\s@\"]{2,})$/;

const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z)-9]*).{8,}$/;

const useStyle = makeStyles({
    container: {
        width: '30vw', height: '75vh', top: '70px', left: '450px', display: 'flex', border: '1px solid lightgray',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: '12px 12px',
    },
    logo: {
        display: 'flex',
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
    sign: {
        fontFamily: 'Calibri'
    },
    account: {
        display: 'flex',
    },
    emailfield: {
        display: 'flex', width: '75%'
    },
    passwordfield: {
        display: 'flex', width: '75%'
    },
    comp: {
        display: 'flex',
        fontFamily: 'Calibri',
        fontSize: 'medium',
    },
    button1: {
        display: 'flex',
        width: '80%',
        justifyContent: 'space-between',
        // border: '1px solid green',
        textTransform: 'capitalize',
    },
    create: {
        width: '90%',
        height: '10%',
        display: 'flex',
        justifyContent: 'space-between',
        // border: '1px solid red'
    },
    button2: {
        textTransform: 'capitalize',width:'48%'
    },
    button3: {
        // border: '1px solid purple',
        display: 'flex',
        justifyContent: 'space-between',width:'30%'
    },
    '@media only screen and (min-width: 320px) and (max-width: 480px)': {
        container: {
            width: '100%', left: '0px', border: 'none'
        },
        emailfield: {
            width: '90%'
        },
        passwordfield: {
            width: '90%',
        },
        create: {
            top: '0px',
            left: '0px',
        },
        button3: {
            left: '0px',
        },
    },
    '@media only screen and (min-width: 481px) and (max-width: 768px)': {
        container: {
            width: '70%', left: '40px',
        },
        emailfield: {
            marginTop: '10px',
            width: '80%',
        },
        passwordfield: {
            marginTop: '10px',
            width: '80%',
        },
        button1: {
            width: '5%',
            left: '0',
        },
        comp: {
            fontSize: '19px'
        },
        button1: {
            width: '85%'
        },
        button2: {
            top: '0',
            left: '0',
        },
        create: { width: '85%', marginBottom: '10px' },
        button3: {
            top: '0',
            right: '0',
        }
    },
    '@media only screen and (min-width:769px) and (max-width:1024px)': {
        container: {
            width: '80%', left: '40px',
        },
        emailfield: {
            marginTop: '10px',
            width: '80%',

        },
        passwordfield: {
            marginTop: '10px',
            width: '80%',
        },

        button1: {
            width: '5%',
            left: '0',
        },
        comp: {
            fontSize: '19px'
        },
        button1: {
            width: '85%'
        },
        button2: {
            top: '0',
            left: '0',
        },
        create: { width: '85%', marginBottom: '10px' },
        button3: {
            top: '0',
            right: '0',
        }
    }
})

function Signin() {

    const classes = useStyle();

    const navigate = useNavigate()

    const [userInput, setUserInput] = useState({ email: "", password: "" })

    //one for border and another is for error msg
    //by default red color initial value is false
    const [rejexObject, setRegexObject] = useState({ emailBorder: false, emailHelper: "", passwordBorder: "", passwordHelper: "" })

    const takeEmail = (event) => {
        //here target is input field
        // setUserInput({
        //     email:event.target.value
        // })

        //privousState spread operator use here it store the previous value
        //it remembers email previous value 
        setUserInput(privousState => ({
            ...privousState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }

    const takePassword = (event) => {
        //it remembers password previous value(spreade means copy)
        setUserInput(privousState => ({
            ...privousState,
            password: event.target.value
        }))
        console.log(event.target.value)
    }

    const submit = () => {

        let emailTest = emailRegx.test(userInput.email)
        let passwordTest = passwordRegex.test(userInput.password)

        if (emailTest === false) {
            setRegexObject(privousState => ({
                ...privousState,
                emailBorder: true,
                emailHelper: "Enter vaild email id"
            }))
        }
        else if (emailTest === true) {
            setRegexObject(privousState => ({
                ...privousState,
                emailBorder: false,
                emailHelper: ""
            }))
        }

        if (passwordTest === false) {
            setRegexObject(privousState => ({
                ...privousState,
                passwordBorder: true,
                passwordHelper: "Enter valid password"
            }))
        }
        else if (passwordTest === true) {
            setRegexObject(privousState => ({
                ...privousState,
                passwordBorder: false,
                passwordHelper: " "
            }))
        }
        //here userInput is what email and password(get value from input field)

        if (emailTest === true && passwordTest === true) {
            login(userInput).then((response) => {
                console.log(response)
                localStorage.setItem("token", response.data.id)
                navigate('/dashboard')
                // console.log("login successfully")
            }).catch((error) => { console.log(error) })
            console.log("login successfully")
        }
    }
    const newAccount = () => {
        navigate('/signup')
    }

    return (
        <div>
            <Box className={classes.container}>
                <Box className={classes.logo}>
                    <span className={classes.g}>G</span>
                    <span className={classes.o}>o</span>
                    <span className={classes.O}>o</span>
                    <span className={classes.g}>g</span>
                    <span className={classes.l}>l</span>
                    <span className={classes.e}>e</span>
                </Box>
                <Box className={classes.sign}>
                    <h2>Sign in</h2>
                </Box>
                <Box className={classes.account}>Use your Google Account</Box>

                <Box className={classes.emailfield}>

                    {/* Email Field */}
                    <TextField id="outlined-basic" label="Email" variant="outlined" size="small" fullWidth="true"
                        onChange={takeEmail} error={rejexObject.emailBorder} helperText={rejexObject.emailHelper} />
                </Box>

                {/* Password field */}
                <Box className={classes.passwordfield}>
                    <TextField id="outlined-basic" label="Password" variant="outlined" size="small" fullWidth="true"
                        onChange={takePassword} error={rejexObject.passwordBorder} helperText={rejexObject.passwordHelper} />
                </Box>

                <Box className={classes.comp}>
                    <h5>Not your computer? Use Guest mode to sign in privately.</h5>
                </Box>
                <Box className={classes.button1}>
                    <Button variant="text" style={{}}>Learn more</Button>
                </Box>
                <Box className={classes.create}>
                    <Box className={classes.button2}>
                        <Button onClick={newAccount} sx={{ fontSize: 'small' }}>create account</Button>
                    </Box>
                    <Box className={classes.button3}>
                        <Button variant="contained" onClick={submit}>Next</Button>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}
export default Signin