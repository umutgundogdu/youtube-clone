import { useState } from "react";

import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  Button,
  Avatar,
} from "@mui/material/";

import {
  Menu as MenuIcon,
  Search as SearchIcon,
  AccountCircle as AccountCircle,
  Notifications as NotificationsIcon,
  GridView as GridViewIcon,
  PhotoCameraFront as PhotoCameraFrontIcon,
  MoreVert as MoreIcon,
  Mic as MicIcon,
} from "@mui/icons-material/";

import YoutubeLogo from "./YoutubeLogoSvg";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "solid",
  borderColor: "grey",
  borderWidth: "1px",
  backgroundColor: "transparent",
  marginRight: theme.spacing(2),
  marginLeft: 200,
  width: "50%",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0.2)})`,
  },
}));

export default function Navbar({ isAuth, setIsAuth }: any) {
  const handleChangeIsAuth = () => {
    setIsAuth(!isAuth);
  };

  return (
    <Box sx={{ flexGrow: 1, zIndex: 999999 }}>
      <AppBar elevation={0} color="inherit" position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <YoutubeLogo />
          <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <SearchIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MicIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          {isAuth && (
            <>
              <Box sx={{ display: { xs: "none", md: "flex" }, mr: 3 }}>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <PhotoCameraFrontIcon />
                </IconButton>

                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <GridViewIcon />
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent="9+" color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Box>
              <Avatar>U</Avatar>
            </>
          )}
          {!isAuth && (
            <>
              <Box sx={{ display: { xs: "none", md: "flex" }, mr: 3 }}>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <GridViewIcon />
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
              <Button
                onClick={handleChangeIsAuth}
                startIcon={<AccountCircle />}
                variant="outlined"
              >
                Sıgn In
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
