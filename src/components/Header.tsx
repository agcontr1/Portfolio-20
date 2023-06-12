import { FC } from "react";
import { Container, Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import NavBar from "components/NavBar";

const Header: FC = () => {
    return(
        <AppBar position='static'>

            <Container sx={{
                gap: 2,
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "1em",
            }}>
                <Typography>
                    Alexander Contreras - Portfolio
                </Typography>
            </Container>
            <NavBar/>
        </AppBar>
    );
}

export default Header;