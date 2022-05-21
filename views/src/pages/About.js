import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme } from '@mui/material/styles';

export default function About() {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    About RNANet
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    A major part of any data-science work consists in finding appropriate data which contains enough signal to tackle the problem we are interested in. Then, cleaning the data to ensure uniformity of the measures, compatibility of the various data sources and protocols, and a reasonable amount of noise is sometimes the most time-consuming step.

                    Here we propose a first attempt of standardized and automatically generated dataset dedicated to non-coding RNA combining together:

                    Sequence, including modified bases,
                    Secondary structure, including non-canonical basepairs and multipairs,
                    Standardized 3D structures and 3D geometrical descriptors and annotations,
                    Homology information like nucleotide frequencies and covarianc models for every position in a 3D chain, sequence consensus, and sequence alignments.
                    We hope this dataset will speed-up advances in machine-learning based approaches for RNA secondary and/or 3D structure prediction, by avoiding spending time on data gathering and cleaning.
                </Typography>
                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button variant="contained">Main call to action</Button>
                    <Button variant="outlined">Secondary action</Button>
                </Stack>
            </Container>
        </Box>

    );
}