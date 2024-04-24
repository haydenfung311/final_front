import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {UserData} from "../../../data/user/UserData.ts";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";
import Stack from "@mui/material/Stack";
import CircularProgress from '@mui/material/CircularProgress';
import * as FirebaseAuthService from "../../../authService/FirebaseAuthService.ts"
import { HashLink } from 'react-router-hash-link';

const logoStyle = {
    width: '100px',
    height: 'auto',
    cursor: 'pointer',
};

// interface AppAppBarProps {
// }

function AppAppBar() {

    const navigate = useNavigate();
    const loginUser = useContext<UserData | null | undefined>(LoginUserContext);
    const [open, setOpen] = React.useState(false);

    const renderLoginUser = () =>{
        if (loginUser){
            return (
                <Stack direction ="row" sx={{ marginLeft: 'auto' }}>
                    <Typography sx={{ color: '#E4000F'}} alignContent={"center"} marginLeft={2}>
                        {
                            loginUser.email
                        }
                    </Typography>
                    <Button sx={{ color: '#E4000F', marginLeft: 2, fontWeight:'bold'}} onClick={()=>{
                        FirebaseAuthService.handleSignOut()
                    }}>
                        Logout
                    </Button>
                </Stack>
            )
        }else if (loginUser === null){
            return(
                <Button
                    variant="text"
                    // size="xsmall"
                    component="a"
                    href="/login"
                    target="_blank"
                    sx={{ bgcolor: '#E4000F', color: 'yellow', borderRadius: '20px' }}
                    onClick={()=>{
                        navigate ("/login")
                    }}
                >Sign in
                </Button>
            )
        }else {
            return(
                            <CircularProgress color="error" size={20}/>

            )
        }
    }
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    // const scrollToSection = (sectionId: string) => {
    //     const sectionElement = document.getElementById(sectionId);
    //     const offset = 128;
    //     if (sectionElement) {
    //         const targetScroll = sectionElement.offsetTop - offset;
    //         sectionElement.scrollIntoView({ behavior: 'smooth' });
    //         window.scrollTo({
    //             top: targetScroll,
    //             behavior: 'smooth',
    //         });
    //         setOpen(false);
    //     }
    // };



    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    backgroundImage: 'none',
                    mt: 2,
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        variant="regular"
                        sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexShrink: 0,
                            borderRadius: '999px',
                            bgcolor:
                                theme.palette.mode === 'light'
                                    ? 'rgba(255, 255, 255, 0.4)'
                                    : 'rgba(0, 0, 0, 0.4)',
                            backdropFilter: 'blur(24px)',
                            maxHeight: 40,
                            borderColor: 'divider',
                            boxShadow:
                                theme.palette.mode === 'light'
                                    ? `0 0 1px rgba(228, 0, 15, 0.1), 1px 1.5px 2px -1px rgba(228, 0, 15, 0.15), 4px 4px 12px -2.5px rgba(228, 0, 15, 0.15)`
                                    : '0 0 1px rgba(228, 0, 15, 0.7), 1px 1.5px 2px -1px rgba(228, 0, 15, 0.65), 4px 4px 12px -2.5px rgba(228, 0, 15, 0.65)',
                            backgroundSize: '100% 100%',
                            backgroundRepeat: 'no-repeat',
                        })}
                    >
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                ml: '-18px',
                                px: 6,
                            }}
                        >
                            <Link to="/">
                            <img
                                src={
                                    'https://upload.wikimedia.org/wikipedia/commons/5/5b/Lego_Creator.svg'
                                }
                                style={{ ...logoStyle, marginTop: '6px' }}
                                alt="logo of sitemark"

                            />
                            </Link>
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: '20px' }}>
                                <HashLink smooth to="/#logoCollection" style={{ textDecoration: 'none' }}>
                                <MenuItem
                                    // onClick={() => scrollToSection('logoCollection')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Our Customer
                                    </Typography>
                                </MenuItem>
                                </HashLink>
                                <HashLink smooth to="/#productlist" style={{ textDecoration: 'none' }}>
                                <MenuItem
                                    // onClick={() => scrollToSection('productlist')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Products
                                    </Typography>
                                </MenuItem>
                                </HashLink>
                                <HashLink smooth to="/#faq" style={{ textDecoration: 'none' }}>
                                <MenuItem
                                    // onClick={() => scrollToSection('faq')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        FAQ
                                    </Typography>
                                </MenuItem>
                                </HashLink>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                gap: 0.5,
                                alignItems: 'center',
                            }}
                        >
                            <Link to = "/shoppingcart">
                            <Tooltip
                                title="Shopping Cart"
                                style={{ color: '#E4000F' }}
                            onClick={() =>{
                                navigate("/shoppingcart")
                            }}>
                                <IconButton>
                                    <ShoppingCartIcon />
                                </IconButton>
                            </Tooltip>
                            </Link>
                            {renderLoginUser()}
                        </Box>
                        <Box sx={{ display: { sm: '', md: 'none' } }}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{ minWidth: '30px', p: '4px' }}
                            >
                                <MenuIcon />
                            </Button>
                            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                                <Box
                                    sx={{
                                        minWidth: '60dvw',
                                        p: 2,
                                        backgroundColor: 'background.paper',
                                        flexGrow: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'end',
                                            flexGrow: 1,
                                        }}
                                    >
                                    </Box>
                                    <HashLink smooth to="/#logoCollection" style={{ textDecoration: 'none' }}>
                                    <MenuItem>
                                        Our Customers
                                    </MenuItem>
                                </HashLink>
                                    <HashLink smooth to="/#productlist" style={{ textDecoration: 'none' }}>
                                    <MenuItem>
                                        Product
                                    </MenuItem>
                                    </HashLink>
                                <HashLink smooth to="/#faq" style={{ textDecoration: 'none' }}>
                                    <MenuItem>FAQ</MenuItem>
                            </HashLink>
                                    <Divider />
                                    <MenuItem>
                                    </MenuItem>
                                    <MenuItem>
                                        {renderLoginUser()}
                                    </MenuItem>
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default AppAppBar;