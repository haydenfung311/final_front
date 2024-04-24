import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Grid from "@mui/material/Grid";

export default function LoadingContainer() {
    return (
        <Grid>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <Stack spacing={4}>
                    <Skeleton variant="rectangular" width='100%' height={600} />
                </Stack>
            </Grid>
            <Grid item xs={12} sm={12}>
                <Stack spacing={4}>
                    <Skeleton variant="rectangular" width='100%' height={600} />
                </Stack>
            </Grid>
        </Grid>
    <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
            <Stack spacing={4}>
                <Skeleton variant="rectangular" width='100%' height={600} />
            </Stack>
        </Grid>
        <Grid item xs={12} sm={12}>
            <Stack spacing={4}>
                <Skeleton variant="rectangular" width='100%' height={600} />
            </Stack>
        </Grid>
    </Grid>
        </Grid>
    );
}