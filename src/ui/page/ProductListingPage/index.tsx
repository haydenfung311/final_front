// import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../../component/NavList';
import Hero from '../../component/Hero';
import LogoCollection from '../../component/LogoCollection';
import FAQ from '../../component/FAQ';
import Footer from '../../component/Footer';
// import getLPTheme from '../../component/GetLPTheme';
import VideoBackground from "../../component/Video";
import MasonryImageList from "../../component/ImageList";
// import {useState} from "react";

// interface ToggleCustomThemeProps {
//     showCustomTheme: Boolean;
//     toggleCustomTheme: () => void;
//     fontFamily: 'Roboto, sans-serif',
// }



// function ToggleCustomTheme({
//                                showCustomTheme,
//                                toggleCustomTheme,
//                            }: ToggleCustomThemeProps) {
//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 width: '100dvw',
//                 position: 'fixed',
//                 bottom: 24,
//             }}
//         >
//             <ToggleButtonGroup
//                 color="primary"
//                 exclusive
//                 value={showCustomTheme}
//                 onChange={toggleCustomTheme}
//                 aria-label="Platform"
//                 sx={{
//                     backgroundColor: 'background.default',
//                     '& .Mui-selected': {
//                         pointerEvents: 'none',
//                     },
//                 }}
//             >
//                 <ToggleButton value>
//                     <AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1 }} />
//                     Custom theme
//                 </ToggleButton>
//                 <ToggleButton value={false}>Material Design 2</ToggleButton>
//             </ToggleButtonGroup>
//         </Box>
//     );
// }

export default function LandingPage() {
    // const [mode, setMode] = useState<PaletteMode>('light');
    // const [showCustomTheme, setShowCustomTheme] = React.useState(true);
    // const LPtheme = createTheme(getLPTheme(mode));
    const defaultTheme = createTheme();

    // const toggleColorMode = () => {
    //     setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    // };

    // const toggleCustomTheme = () => {
    //     setShowCustomTheme((prev) => !prev);
    // };


    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <AppAppBar/>
            <Hero />
            <VideoBackground/>
            <Box sx={{ bgcolor: 'background.default' }}>
                <LogoCollection />
                <MasonryImageList/>
                <FAQ />
                <Footer />
            </Box>
            {/*<ToggleCustomTheme*/}
            {/*    showCustomTheme={showCustomTheme}*/}
            {/*    toggleCustomTheme={toggleCustomTheme}*/}
            {/*/>*/}
        </ThemeProvider>
    );
}

// use this template for the front page - need to change nav bar
// https://mui.com/material-ui/getting-started/templates/landing-page/
// use the Testimonials grid to show product card

// template
// https://mui.com/joy-ui/getting-started/templates/


// product Listing
// https://mui.com/material-ui/react-image-list/#title-bar-below-image-masonry
// https://mui.com/joy-ui/react-card/#product-card

// front UI
// https://mui.com/joy-ui/react-card/#css-variables-playground