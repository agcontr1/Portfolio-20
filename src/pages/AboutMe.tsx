import { FC, Fragment } from 'react';
import {Container, Typography, Box } from "@mui/material";

const AboutMe: FC = () => {
    return(
        <Fragment>
            <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
                    <Box
                        component="img"
                        sx={{
                            height: 200,
                            width: 200,
                            borderRadius: '50%',
                            marginRight: '10px',
                        }}
                        alt="The house from the offer."
                        src="./about-me.png"
                    />
                    <Typography variant="h2" component="h1" gutterBottom>
                        About Me
                    </Typography>
                </Box>
                <Typography variant="h5" component="h2" gutterBottom>
                    {
                        'I am Alexander Contreras, and I am excited to share that I recently received a certificate in Full' +
                        ' Stack Development from the University of Arizona. This certificate program has equipped me with ' +
                        'the skills and knowledge necessary to build and deploy modern web applications. I am proficient ' +
                        'in a variety of programming languages and technologies, including HTML, CSS, JavaScript, React.js, ' +
                        'Node.js, Express, SQL, and MongoDB. I am also skilled at working with teams to deliver projects on ' +
                        'time and within budget.'
                    }
                </Typography>
            </Container>
        </Fragment>
    );
}

export default AboutMe;