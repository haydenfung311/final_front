import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Divider from "@mui/material/Divider";

const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
    ...theme.typography['body-sm'],
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: theme.vars.palette.text.secondary,
}));
export default function OrderSummary() {
    return (
        <Card sx={{ width: 360, maxWidth: '100%'}}>
            <Typography
                level="body-lg"
                sx={{
                    backgroundColor: 'rgba(228, 0, 15, 0.7)', // Background color with 70% transparency
                    color: '#fff', // Text color
                    padding: '8px', // Padding for better visibility
                    borderTopLeftRadius: '6px',
                    borderTopRightRadius: '6px',
                }}
            >
                Order Summary
            </Typography>
            <CardContent sx={{ backgroundColor: 'white' }}>
                <Grid container spacing={1} sx={{ flexGrow: 1, backgroundColor: 'white' }}>
                    <Grid xs={6} md={8}>
                        <Item sx={{ textAlign: 'left' }}>Sub Total</Item>
                    </Grid>
                    <Grid xs={6} md={4}>
                        <Item sx={{ textAlign: 'right' }}>$118.86</Item>
                    </Grid>
                    <Grid xs={6} md={8}>
                        <Item sx={{ textAlign: 'left' }}>Discount</Item>
                    </Grid>
                    <Grid xs={6} md={4}>
                        <Item sx={{ textAlign: 'right' }}>-</Item>
                    </Grid>
                    <Grid xs={6} md={8}>
                        <Item sx={{ textAlign: 'left' }}>Shipping</Item>
                    </Grid>
                    <Grid xs={6} md={4}>
                        <Item sx={{ textAlign: 'right' }}>Free</Item>
                    </Grid>
                </Grid>
                <Divider sx={{ marginTop: '10px', marginBottom: '10px' }}/>
                <Grid container spacing={2} sx={{ flexGrow: 1, backgroundColor: 'white' }}>
                    <Grid xs={6} md={8}>
                        <Item sx={{ textAlign: 'left', fontWeight: 'bold', fontSize: '16px' }}>Total</Item>
                    </Grid>
                    <Grid xs={6} md={4}>
                        <Item sx={{ textAlign: 'right', fontWeight: 'bold', fontSize: '16px' }}>$118.86</Item>
                    </Grid>
                </Grid>
            </CardContent>

            <CardOverflow>
                <Button
                    variant="solid"
                    size="lg"
                    sx={{
                        backgroundColor: '#E4000F',
                        color: 'white', // Optionally, set text color to white
                        '&:hover': {
                            backgroundColor: '#E4000F', // Change background color on hover if needed
                        },
                    }}
                >
                    Check Out
                </Button>
            </CardOverflow>
        </Card>
    );
}