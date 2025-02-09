import React, {useContext} from 'react';
import {AppBar, Avatar, Box, Button, Switch, Toolbar, Typography} from "@mui/material";
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import {ThemeContext} from "../context/ThemeContext";

function AppHeader() {
  const { user, logout } = useContext(AuthContext)!;
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)!;
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>
          TodoApp
        </Typography>

        <Box>
          <Switch checked={darkMode} onChange={toggleDarkMode} />
          <Typography variant="caption">Dark Mode</Typography>
        </Box>

        <Box>
          {user ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar sx={{ bgcolor: "secondary.main", mr: 1 }}>{user.username.charAt(0).toUpperCase()}</Avatar>
              <Typography variant="body1" sx={{ mr: 2 }}>{user.username}</Typography>
              <Button color="inherit" onClick={() => { logout(); navigate("/login"); }}>Logout</Button>
            </Box>
          ) : (
            <>
              <Button color="inherit" onClick={() => navigate("/login")}>Sign In</Button>
              <Button color="inherit" onClick={() => navigate("/register")}>Sign Up</Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;