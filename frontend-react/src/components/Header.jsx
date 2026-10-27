import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Header() {
    return (
        <AppBar position="static" elevation={1}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ fontWeight: 700, mr: 3 }}>
                    SGA
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                    <Button color="inherit" component={Link} to="/">Inicio</Button>
                    <Button color="inherit" component={Link} to="/alumnos">Alumnos</Button>
                    <Button color="inherit" component={Link} to="/ayuda">Ayuda</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}