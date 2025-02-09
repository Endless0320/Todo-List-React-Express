import { Outlet } from "react-router-dom";
import {Box, Container} from "@mui/material";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

export const AppLayout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppHeader/>

      <Container sx={{ mt: 4 }}>
        <Outlet />
      </Container>

      <AppFooter/>
    </Box>
  );
};
