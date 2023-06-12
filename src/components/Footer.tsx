import { FC } from 'react';
import { Box, IconButton, Container, styled, Toolbar, } from '@mui/material';
import {Link as RouterLink} from "react-router-dom";

import {GitHub, LinkedIn, Phone } from "@mui/icons-material";

const StyledFooter = styled(Box)(() => ({
    backgroundColor: 'white'
}));

const Footer: FC = () => {
    return(
        <StyledFooter>
            <Container>
                <Toolbar sx={{ justifyContent: 'center' }}>
                    <IconButton aria-label="github" href={'https://github.com/agcontr1'} sx={{margin: '15px'}}>
                        <GitHub/>
                    </IconButton>
                    <IconButton aria-label='linkedin' href={'https://www.linkedin.com/in/alexgco/'} sx={{margin: '15px'}}>
                        <LinkedIn/>
                    </IconButton>
                    <IconButton aria-label='phone' href={'tel:6198693607'} sx={{margin: '15px'}}>
                        <Phone/>
                    </IconButton>
                </Toolbar>
            </Container>
        </StyledFooter>
    );
};

export default Footer;