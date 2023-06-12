import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Container, styled, Toolbar, } from '@mui/material';

const StyledNavBar = styled(Box)(() => ({
    backgroundColor: 'white'
}))

const NavBar: FC = () => {

    return(
        <StyledNavBar>
            <Container>
                <Toolbar sx={{ justifyContent: 'space-around' }}>
                    <Button variant="text" color="primary" component={RouterLink} to={{pathname: '/'}} sx={{fontSize: '.8em'}}>
                        About Me
                    </Button>
                    <Button variant="text" color="primary" component={RouterLink} to={{pathname: '/portfolio'}} sx={{fontSize: '.8em'}}>
                        Portfolio
                    </Button>
                    <Button variant="text" color="primary" component={RouterLink} to={{pathname: '/contact'}} sx={{fontSize: '.8em'}}>
                        Contact
                    </Button>
                    <Button variant="text" color="primary" href={'./AGC Resume 2023.7.docx.pdf'} download sx={{fontSize: '.8em'}}>
                        Resume
                    </Button>
                </Toolbar>
            </Container>
        </StyledNavBar>
    );
}

export default NavBar;