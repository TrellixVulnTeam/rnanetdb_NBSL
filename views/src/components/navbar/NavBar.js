import { Grid, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { navLinks } from './navLinks'
import { Link } from '@mui/material'

export const Navbar = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'underline' : 'none',
            color: "GrayText",
            textTransform: 'capitalize',
            fontSize: '1.3rem',
        }
    }

    return (
        <nav className='nav' style={{ overflowX: "scroll" }}>
            <Grid container spacing={2} flexWrap="nowrap">
                {navLinks.map(link => (
                    <Grid item>
                        {link.isExternal ? (
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                {link.name}
                            </a>
                        ) : (
                            <NavLink
                                key={link.name}
                                to={link.link}
                                style={navLinkStyles}
                                className='nav-link'
                                color='GrayText'
                            >
                                {link.name}
                            </NavLink>
                        )}
                    </Grid>
                ))}
                <Grid item>
                    <a 
                        href={"https://evryrna.ibisc.univ-evry.fr/evryrna/rnanet"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color:"GrayText", textDecoration:"none", fontSize: "1.3rem" }}
                    >
                            RNAEvry
                        </a>
                </Grid>
            </Grid>

        </nav>
    )
}