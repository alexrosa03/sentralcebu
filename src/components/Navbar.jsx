import {Tabs,Tab} from '@mui/material';

function Navbar() {
    return (
        <Tabs value={0} centered>
            <Tab label="Home" />
            <Tab label="What's up!" />
            <Tab label="Private Events" />
            <Tab label="Book a table"/>
        </Tabs>
    )
}

export default Navbar;

