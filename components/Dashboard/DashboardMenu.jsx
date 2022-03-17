import React from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import PagesIcon from '@mui/icons-material/Pages';
import BarChartIcon from '@mui/icons-material/BarChart';
import {ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper, Typography} from "@mui/material";
import {useRouter} from "next/router";

export default function DashboardMenu() {

    const Router = useRouter();

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleLogout = () => {
        localStorage.removeItem("access-token");
        Router.reload();
    }

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleCloseMenu = (event) => {
        // if (user.role === 1) setAnchorEl(null);
        if (anchorRef.current && anchorRef.current.contains(event?.target)) {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <Button onClick={handleToggle} ref={anchorRef} variant="outlined" startIcon={<KeyboardArrowDownIcon />}>
                Filter
            </Button>
            <Popper
                anchorEl={anchorRef.current}
                disablePortal
                open={open}
                placement={'bottom-start'}
                role={undefined}
                transition
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'top' ? 'center top' : 'center top' }}
                    >
                        <Paper sx={{p: 0.5, bgcolor: '#282828', color: '#fff'}}>
                            <ClickAwayListener onClickAway={handleCloseMenu}>
                                <MenuList autoFocusItem={open}>
                                    <MenuItem>
                                        <DynamicFeedIcon/>
                                        <Box mr={1.5} />
                                        <Typography variant={'subtitle2'}>{'My Posts'}</Typography>
                                    </MenuItem>
                                    <MenuItem>
                                        <PagesIcon/>
                                        <Box mr={1.5} />
                                        <Typography variant={'subtitle2'}>{'My Portfolios'}</Typography>
                                    </MenuItem>
                                    <MenuItem>
                                        <BarChartIcon/>
                                        <Box mr={1.5} />
                                        <Typography variant={'subtitle2'}>{'Activity'}</Typography>
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
}
