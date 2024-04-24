import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Hero() {
    return (
        <Box
            id="hero"
            sx={(theme) => ({
                width: '100%',
                backgroundImage:
                    theme.palette.mode === 'light'
                        ? 'linear-gradient(180deg, #FEB2B2, #FFF)'
                        : `linear-gradient(#990000, ${alpha('#090E10', 0.0)})`,
                backgroundSize: '100% 40%',
                backgroundRepeat: 'no-repeat',
            })}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 20, sm: 26 },
                    pb: { xs: 14, sm: 18 },
                }}
            >
                <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '100%' } }}>
                    <Typography
                        variant="h1"
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignSelf: 'center',
                            textAlign: 'center',
                            fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                        }}
                    >
                        Only the best&nbsp;
                        <Typography
                            component="span"
                            variant="h1"
                            sx={{
                                fontSize: 'clamp(3rem, 10vw, 4rem)',
                                color: '#E4000F',
                            }}
                        >
                            is good enough
                        </Typography>
                    </Typography>
                    <Typography
                        textAlign="center"
                        color="text.secondary"
                        sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' , marginLeft: '10px',marginRight: '10px'} }}
                    >
                        Bring your lego creations to life with your own design! Easily add movement, light, sound and Bluetooth remote control to your LEGO sets.
                    </Typography>
                    {/*<Stack*/}
                    {/*    direction={{ xs: 'column', sm: 'row' }}*/}
                    {/*    alignSelf="center"*/}
                    {/*    spacing={1}*/}
                    {/*    useFlexGap*/}
                    {/*    sx={{ pt: 2, width: { xs: '90%', sm: 'auto' } }}*/}
                    {/*>*/}
                    {/*    <TextField*/}
                    {/*        id="outlined-basic"*/}
                    {/*        hiddenLabel*/}
                    {/*        size="small"*/}
                    {/*        variant="outlined"*/}
                    {/*        aria-label="Enter your style"*/}
                    {/*        placeholder="Enter Product ID"*/}
                    {/*        inputProps={{*/}
                    {/*            autocomplete: 'on',*/}
                    {/*            ariaLabel: 'Tell us your style!',*/}
                    {/*        }}*/}
                    {/*        sx={{*/}
                    {/*            '&:hover': {*/}
                    {/*                borderColor: 'red',*/}
                    {/*            },*/}
                    {/*        }}*/}
                    {/*    />*/}
                    {/*    <Button sx={{ bgcolor: '#E4000F', color: 'yellow' }}>*/}
                    {/*        Search*/}
                    {/*    </Button>*/}
                    {/*</Stack>*/}
                    {/*<Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>*/}
                    {/*    By clicking &quot;Search&quot; you agree to our&nbsp;*/}
                    {/*    <Link href="#" color="primary">*/}
                    {/*        Terms & Conditions*/}
                    {/*    </Link>*/}
                    {/*    .*/}
                    {/*</Typography>*/}
                </Stack>
            </Container>
        </Box>
    );
}