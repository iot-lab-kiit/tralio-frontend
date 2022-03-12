// import React, { useEffect, useRef, useState } from 'react';
// import AppBar from "@mui/material/AppBar";
// import Box from '@mui/material/Box';
// import Hidden from '@mui/material/Hidden';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import IconButton from '@mui/material/IconButton';
// import Drawer from '@mui/material/Drawer';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import {createStyles, makeStyles, useTheme} from '@mui/styles';
// import {Avatar, Container, Divider, Grid, Typography} from "@mui/material";
// import Link from "../Layouts/Link"
//
// const useStyles = makeStyles(() =>
//     createStyles({
//         mainRoot: {
//             display: 'flex',
//         },
//         appbar: {
//             display: 'flex',
//             justifyContent: 'space-around',
//             alignItems: 'center',
//             width: '100%',
//         },
//         title: {
//             color: '#454A6D',
//             fontSize: '15px',
//             fontWeight: '800',
//             marginBottom: '18px',
//         },
//         item: {
//             color: '#868686',
//             fontSize: '13px',
//         }
//     }),
// );
//
// const CustomLayout = ({ children }) => {
//     const classes = useStyles();
//
//     const [mobOpen, setMobOpen] = React.useState(false);
//     const handleMobDrawer = () => {
//         setMobOpen(!mobOpen);
//     };
//
//     const [onTop, setOnTop] = useState(true);
//     const navRef = useRef();
//
//     useEffect(() => {
//         const position = navRef.current.offsetTop;
//         window.onscroll = function () {
//             if (window.pageYOffset > position) {
//                 setOnTop(false);
//             } else {
//                 setOnTop(true);
//             }
//         };
//     });
//
//     const drawerWidth = 240;
//     const appbarHeight = 55;
//
//     return (
//         <>
//             <AppBar
//                 color={'transparent'}
//                 ref={navRef}
//                 elevation={!onTop ? 4 : 0}
//                 position="fixed"
//             >
//                 <Box>
//
//                 </Box>
//             </AppBar>
//
//             {/*==================================================================================================================================*/}
//
//             <Drawer open={mobOpen} onClose={handleMobDrawer}>
//                 <Box display={'flex'}
//                      width={drawerWidth}
//                 >
//                     <List>
//                         <ListItem component={Box} px={2} display={'flex'} alignItems={'center'}>
//                             <Box
//                                 display={'flex'}
//                                 alignItems={'center'}
//                                 component={Link}
//                                 href={'/'}
//                                 onClick={handleMobDrawer}
//                                 height={appbarHeight}
//                             >
//
//                             </Box>
//                             <Box ml={12} />
//                             <div>
//                                 <IconButton onClick={handleMobDrawer}>
//                                     <CloseIcon />
//                                 </IconButton>
//                             </div>
//                         </ListItem>
//                         <Box mt={1} />
//                         <ListItem>
//
//                         </ListItem>
//                     </List>
//                 </Box>
//             </Drawer>
//         </>
//     );
// };
//
//
//
//
// export default CustomLayout;
