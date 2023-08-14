import * as React from "react";
import PropTypes from "prop-types";
import "./styles/header.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useLocation, useParams } from "react-router-dom";
import Logout from "./commonpages/Logout";
import Swal from "sweetalert2";

const drawerWidth = 240;
const navItems = [
  { label: "Home", link: "/" },
  { label: "Images", link: "images" },
  { label: "Upload", link: "upload" },

  { label: "Profile", link: "profile" },
];

function Header(props) {
  const location = React.useState(useLocation());

  const [logoutCall, setLogoutCall] = React.useState(false);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function closeAllSweetAlerts() {
    Swal.close(() => Logout(props.logoutSwwtAlert()));
  }
  function logout() {
    setLogoutCall(true);
    Logout();
  }

  React.useEffect(() => {
    if (logoutCall) {
      closeAllSweetAlerts();
    } else {
      return;
    }
  }, [location]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              primary={item.label}
              component={Link}
              to={item.link}
            >
              <ListItemText>{item.label}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="header-page">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              HandyNotes
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.link}
                  sx={{
                    color:
                      location.pathname == item.link ? "bluevoilet" : "#fff",
                    fontWeight: location.pathname == item.link ? "bolder" : " ", // Apply bold font weight for the active link
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button onClick={() => logout()} sx={{ color: "#fff" }}>
                LOGOUT
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
              "& > div": {
                // Your CSS styling for the div tag goes here

                padding: "10px",
                textAlign: "center",
              },
            }}
          >
            {drawer}
            <span onClick={handleDrawerToggle}>
              <div
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                onClick={() => logout()}
              >
                Logout
              </div>
            </span>
          </Drawer>
        </Box>
      </Box>
    </div>
  );
}

export default Header;
