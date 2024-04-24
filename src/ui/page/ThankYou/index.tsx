import NavList from "../../component/NavList";
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { Box } from "@mui/material";
import { HashLink } from 'react-router-hash-link';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


export default function ThankYou() {

    const [second, setSecond] = useState <number>(5);
    const navigate = useNavigate();
    const handleCountDown = () => {
        setSecond ((prevState) =>(
            prevState - 1
        ));
    }

    useEffect(() => {
        const countDown = setTimeout(handleCountDown,1000)
        if(second <= 0){
            navigate("/");

        }
        return(() =>{
                clearTimeout(countDown);
        })
    }, [second])


    return(
        <>
        <NavList/>
        <Box sx={{
            display: 'flex',         // Enable flexbox
            justifyContent: 'center', // Center horizontally
            alignItems: 'center',     // Center vertically
            height: '100vh',          // Full view height to center vertically in the viewport
        }}>
        <Card
            size="lg"
            variant="plain"
            orientation="horizontal"
            sx={{
                textAlign: 'center',
                maxWidth: '100%',
                width: 800,
                // to make the demo resizable
                resize: 'horizontal',
                overflow: 'auto',
            }}
        >
            <CardOverflow
                variant="solid"
                color="primary"
                sx={{
                    flex: '0 0 200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    px: 'var(--Card-padding)',
                    backgroundColor: '#E4000F',
                }}
            >
                <Typography fontSize="xl4" fontWeight="xl" textColor="#fff">
                    Thank You!
                </Typography>
                <Typography textColor="danger.200">
                    We are glad you see something you like !
                </Typography>
            </CardOverflow>
            <CardContent sx={{ gap: 1.5, minWidth: 200 }}>
                <AspectRatio ratio="19/8" objectFit="contain" variant="plain">
                    <img
                        alt=""
                        src="https://static.vecteezy.com/system/resources/previews/006/409/485/original/people-thinking-to-make-decision-problem-solving-and-find-creative-ideas-with-question-mark-in-flat-cartoon-background-for-poster-illustration-vector.jpg"
                    />
                </AspectRatio>
                <CardContent>
                    <Typography level="title-lg" textColor={'#E4000F'}>Forgot something?</Typography>
                    <Typography fontSize="sm" sx={{ mt: 0.5 }}>
                        Why not come back in to our shop to get more Legos?!
                    </Typography>
                </CardContent>
                <HashLink smooth to="/#productlist" style={{ textDecoration: 'none' }}>
                <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                        '--variant-borderWidth': '2px',
                        borderRadius: 40,
                        borderColor: '#E4000F',
                        mx: 'auto',
                        color: '#E4000F'
                    }}
                >
                    Back to our store in {second} second
                </Button>
                </HashLink>
            </CardContent>
        </Card>
        </Box>
            </>
    );
}