import { Container } from '@mui/material';

const VideoBackground = () => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <video
                autoPlay
                loop
                muted
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            >
                <source src="src/assets/Reclameregister.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Container
                maxWidth="sm"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'white',
                }}
            >
            </Container>
        </div>
    );
};

export default VideoBackground;
