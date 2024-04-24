import { styled } from '@mui/material/styles';
import NavList from "../../component/NavList"
import Container from "@mui/joy/Container";

const CenteredDiv = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
    height: '100vh', // Set height to full viewport height
}));

const HeaderText = styled('h1')(() => ({
    fontFamily: 'Arial', // Replace 'Arial' with your preferred header font
    fontSize: '4rem', // Adjust font size as needed
}));

export default function ErrorPage() {
    return (
        <Container>
        <CenteredDiv>
            <NavList/>
            <HeaderText>{"404 PAGE NOT FOUND"}</HeaderText>
        </CenteredDiv>
        </Container>
    );
}

