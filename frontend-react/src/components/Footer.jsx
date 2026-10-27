import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                mt: 5,
                py: { xs: 3, sm: 3.5 },
                px: 2,
                textAlign: "center",
                borderTop: 1,
                borderColor: "divider",
                bgcolor: "background.paper"
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mb: 1 }}>
                <Box component="img" src="/sga-brand.svg" alt="" aria-hidden="true" sx={{ width: 28, height: 28 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 800, letterSpacing: "-0.03em" }}>SGA</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                © 2026 Todos los derechos reservados
                <Box component="span" sx={{ mx: 1, color: "divider" }}>•</Box>
                Valentino Rivas - Programación IV
            </Typography>
        </Box>
    )
}

export default Footer;