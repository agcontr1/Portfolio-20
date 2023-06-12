import { FC, Fragment } from "react";
import { Container, Typography, Grid, TextField, Button } from "@mui/material";

const Contact: FC = () => {
    return (
        <Fragment>
            <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                <Typography variant="h6" gutterBottom>
                    Contact Me:
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            fullWidth
                            autoComplete="given-name"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            fullWidth
                            autoComplete="family-name"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            name="email"
                            label="E-mail Address"
                            fullWidth
                            autoComplete="email@example"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="message"
                            name="message"
                            label="Message"
                            fullWidth
                            multiline
                            minRows={4}
                            autoComplete="type your message here..."
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant={'outlined'}>Submit</Button>
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    );
};

export default Contact;

