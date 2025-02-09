import React from 'react';
import {Box, Typography} from "@mui/material";

function AppFooter() {
  return (
    <Box component="footer" sx={{ textAlign: "center", py: 2, mt: "auto", bgColor: "background.default", borderTop: "1px solid #ddd" }}>
      <Typography variant="body2">© {new Date().getFullYear()} TodoApp.</Typography>
    </Box>
  );
}

export default AppFooter;