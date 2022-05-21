import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

const tiers = [
    {
        title: 'SQLite3 Database',
        buttonText: 'DOWNLOAD RNANet',
        buttonVariant: 'outlined',
        downloadLink: 'https://entrepot.ibisc.univ-evry.fr/f/affcebef9e504a65a771/?dl=1'
    },
    {
        title: 'Text files (CSV)',
        buttonText: 'DOWNLOAD RNANet',
        buttonVariant: 'outlined',
        downloadLink: 'https://entrepot.ibisc.univ-evry.fr/f/2ad49402939f4775be58/?dl=1'
    },
    {
        title: 'Git repository',
        buttonText: 'DOWNLOAD RNANet',
        buttonVariant: 'outlined',
        downloadLink: 'https://forge.ibisc.univ-evry.fr/lbecquey/RNANet'
    },
];

function Download() {
    return (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Download 
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    RNANetDB is could be downloaded as a SQLite3 database, as a text file (CSV), or as a git repository.
                    for more information, please visit the 
                    <Link href="https://evryrna.ibisc.univ-evry.fr/evryrna/rnanet" target={"_blank"}>RNANet website</Link>.
                </Typography>
            </Container>

            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        // Download card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === 'Enterprise' ? 12 : 6}
                            md={4}
                        >
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardActions>
                                    <Button fullWidth variant={tier.buttonVariant}>
                                        <a href={tier.downloadLink} style={{ textDecoration:"none", color:"GrayText" }}>
                                            {tier.buttonText}
                                        </a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default function Pricing() {
    return <Download />;
}