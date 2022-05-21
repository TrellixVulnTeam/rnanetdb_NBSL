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
        <nav className='nav' style={{ overflowX: "scroll"}}>
            <Grid container spacing={2} flexWrap="nowrap">
                {navLinks.map(link => (
                    <Grid item>
                        {link.isExternal ? (
                            <Link href={link.url} target="_blank" rel="noopener noreferrer">
                                <Typography variant="h6" style={navLinkStyles(link)}>
                                    {link.name}
                                </Typography>
                            </Link>
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
            </Grid>
            
        </nav>
    )
}