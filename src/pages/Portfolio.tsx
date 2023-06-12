import { FC, Fragment } from "react";
import { Container, Typography } from "@mui/material";

const Portfolio: FC = () => {
    return (
        <Fragment>
            <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                <Typography variant="h5" component="h2" gutterBottom>
                    {
                        'Portfolio page'
                    }
                </Typography>
            </Container>
        </Fragment>
    );
};

export default Portfolio;