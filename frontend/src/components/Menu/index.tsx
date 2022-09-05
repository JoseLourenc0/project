import { Link } from 'react-router-dom'
import { Button, Toolbar, Box, AppBar } from "@mui/material";
import { Tab } from '../../models/tab';
import './style.css'

export const Menu = (props: {tabs: Tab[]}) => {
    return (
        <div className="App">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        {
                            props.tabs.map((e,i) => <Link className='nav-link' key={i} to={e.url}><Button color="inherit">{e.name}</Button></Link>)
                        }
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}