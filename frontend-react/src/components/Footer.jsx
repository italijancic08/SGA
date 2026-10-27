import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Footer() {
    return (
        <Box
            component="footer"
            sx={{ py: 3, textAlign: "center", borderTop: 1, borderColor: "divider" }}
        >
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>SGA</Typography>
            <Typography variant="body2" color="text.secondary">
                © 2026 Todos los derechos reservados
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Valentino Rivas - Programación IV
            </Typography>
        </Box>
    )
}

export default Footer;