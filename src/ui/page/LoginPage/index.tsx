import {Alert, AlertTitle, Box, FilledInput, InputAdornment, InputLabel} from "@mui/material";
import NavList from "../../component/NavList";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/joy";
import React, {ChangeEvent, FormEvent, useContext, useEffect, useState} from "react";
import IconButton from "@mui/joy/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import * as FirebaseAuthService from"../../../authService/FirebaseAuthService.ts";
import {useNavigate} from "react-router-dom";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";
import {UserData} from "../../../data/user/UserData.ts";
import Divider from "@mui/material/Divider";
import {GoogleLoginButton} from "react-social-login-buttons";

export default function LoginPage(){

    const [email, setEmail] = useState <string>("");
    const [password, setPassword] = useState<string>("");

    const[isLoginFailed, setIsLoginFailed] = useState<boolean>(false);

    const navigate = useNavigate();

    const loginUser = useContext<UserData |null |undefined>(LoginUserContext);
    const handleEmailChange =(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    setEmail(event.target.value);
    }

    const handlePasswordChange =(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setPassword(event.target.value);
    }

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handlelogin = async (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(email);
        console.log(password);
       const loginResult = await FirebaseAuthService.handleSignInWithEmailAndPassword(email, password);
    if (loginResult){
        navigate(-1);
    }else{
    setIsLoginFailed(true);
    }
    }

    const handleGoogleSignIn = async ()=>{
        if (await FirebaseAuthService.handleSignInWithGoogle()){
            navigate (-1);
        }
    }

    useEffect(() => {
        if(loginUser){
            navigate("/");
        }
    }, [loginUser]);

    return(
        <>
            <NavList/>
            <Box
                sx={{
                width:'100%',
                    height:'85vh',
                    backgroundCOlor:"lightgray",
                    mt: 20,
                    display: 'flex',
                    justifyContent: 'Center',

                }}>
                <Paper
                    sx={{
                        width:"40%",
                        height: "fit-content",
                        p:3,
                        borderRadius:8,
                        boxShadow: '0px 2px 64px rgba(255, 0, 0, 0.5)',
                    }}
                    component="form"
                    onSubmit={handlelogin}
                >
                    {
                        isLoginFailed &&
                        <Alert severity="error" sx={{borderRadius: '16px', margin: '8px'}}>
                        <AlertTitle>Fail To Login</AlertTitle>
                        Cannot find your login account.
                    </Alert>
                    }

                    <Box m={4}>
                        <InputLabel
                            htmlFor="email"
                            sx={{
                                fontWeight: 'bold', // Make the label bold
                                color: 'red' // Set the color to red
                            }}
                        >Email</InputLabel>
                        <Box >
                        <TextField
                            id="email"
                            type="email"
                            variant="filled"
                            color="error"
                            fullWidth
                            onChange={handleEmailChange}
                        />
                    </Box>
                    <Box mt={4}>
                        <InputLabel
                            htmlFor="filled-adornment-password"
                            sx={{
                                fontWeight: 'bold', // Make the label bold
                                color: 'red' // Set the color to red
                            }}
                        >Password</InputLabel>
                        <FilledInput
                            id="filled-adornment-password"
                            // type ="password"
                            // htmlFor="filled-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        // edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            // variant="filled"
                            color="error"
                            fullWidth
                            onChange={handlePasswordChange}
                        />

                    </Box>
                        <Box mt={4}>
                            <Button
                                type="submit"
                                    fullWidth
                                    sx={{
                                        height: '48px',
                                        backgroundColor: 'red', // Set the background color to red
                                        color: 'white', // Set the text color to white
                                        '&:hover': {
                                            backgroundColor: 'darkred', // Change background color on hover
                                        },
                                    }}
                            >
                                Login
                            </Button>
                            <Divider sx={{my:4}}/>
                            <GoogleLoginButton
                                style={{
                                    width:'100%',
                                    margin:0,
                                }}
                                onClick={handleGoogleSignIn}
                                />
                        </Box>
                    </Box>


                </Paper>
            </Box>
        </>
    )
}