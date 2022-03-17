import React from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Avatar from "@mui/material/Avatar";
import {ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper, Typography} from "@mui/material";
import {useRouter} from "next/router";

export default function MenuButton() {

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
            <Avatar onClick={handleToggle} ref={anchorRef}>K</Avatar>
            <Popper
                anchorEl={anchorRef.current}
                disablePortal
                open={open}
                placement={'bottom-end'}
                role={undefined}
                transition
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'top' ? 'center top' : 'center top' }}
                    >
                        <Paper sx={{p: 0.5}}>
                            <ClickAwayListener onClickAway={handleCloseMenu}>
                                <MenuList autoFocusItem={open}>
                                    <MenuItem>
                                        <AccountCircleIcon />
                                        <Box mr={1.5} />
                                        <Typography variant={'subtitle2'}>{'Profile'}</Typography>
                                    </MenuItem>
                                    <MenuItem>
                                        <SettingsIcon />
                                        <Box mr={1.5} />
                                        <Typography variant={'subtitle2'}>{'Settings'}</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleLogout}>
                                        <ExitToAppIcon />
                                        <Box mr={1.5} />
                                        <Typography variant={'subtitle2'}>{'Logout'}</Typography>
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
