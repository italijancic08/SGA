import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import HelpOutlineIcon from "@mui/icons-material/HelpOutlineOutlined";
import SelectorTema from "./SelectorTema";

export default function Header() {
    return (
        <AppBar
            position="static"
            color="inherit"
            elevation={0}
            sx={{ borderBottom: 1, borderColor: "divider", bgcolor: "background.paper" }}
        >
            <Toolbar
                sx={{
                    width: "100%",
                    maxWidth: 1200,
                    mx: "auto",
                    px: { xs: 2, sm: 3 },
                    py: { xs: 1, sm: 0.75 },
                    gap: { xs: 1, sm: 2 },
                    flexWrap: { xs: "wrap", sm: "nowrap" }
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, flexShrink: 0 }}>
                    <Box
                        component="img"
                        src="/sga-brand.svg"
                        alt=""
                        aria-hidden="true"
                        sx={{ width: 40, height: 40 }}
                    />
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ fontWeight: 800, letterSpacing: "-0.04em", color: "text.primary" }}
                    >
                        SGA
                    </Typography>
                </Box>
                <Box
                    component="nav"
                    aria-label="Navegación principal"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: { xs: "space-between", sm: "center" },
                        gap: { xs: 0.25, sm: 1 },
                        order: { xs: 3, sm: 2 },
                        width: { xs: "100%", sm: "auto" },
                        flex: { sm: 1 }
                    }}
                >
                    <Button color="inherit" component={Link} to="/" sx={{ minWidth: 0, px: { xs: 1, sm: 1.5 }, borderRadius: 2 }}>Inicio</Button>
                    <Button color="inherit" component={Link} to="/alumnos" sx={{ minWidth: 0, px: { xs: 1, sm: 1.5 }, borderRadius: 2 }}>Alumnos</Button>
                    <Button color="inherit" component={Link} to="/docentes" sx={{ minWidth: 0, px: { xs: 1, sm: 1.5 }, borderRadius: 2 }}>Docentes</Button>
                    <IconButton
                        color="primary"
                        component={Link}
                        to="/ayuda"
                        aria-label="Ayuda"
                        title="Ayuda"
                        sx={{
                            width: 40,
                            height: 40,
                            border: 1,
                            borderColor: "divider",
                            borderRadius: "50%"
                        }}
                    >
                        <HelpOutlineIcon />
                    </IconButton>
                </Box>
                <Box sx={{ ml: { sm: "auto" }, order: { xs: 2, sm: 3 }, flexShrink: 0 }}>
                    <SelectorTema />
                </Box>
            </Toolbar>
        </AppBar>
    )
}