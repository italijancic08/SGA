import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"

export default function Inicio() {
    return (
        <Paper
            elevation={0}
            sx={{
                position: "relative",
                overflow: "hidden",
                p: { xs: 3, sm: 5 },
                border: 1,
                borderColor: "divider",
                borderRadius: 4,
                bgcolor: "background.paper"
            }}
        >
            <Box
                aria-hidden="true"
                sx={{
                    position: "absolute",
                    width: { xs: 180, sm: 240 },
                    height: { xs: 180, sm: 240 },
                    borderRadius: "50%",
                    bgcolor: "action.hover",
                    right: { xs: -80, sm: -70 },
                    top: { xs: -90, sm: -120 }
                }}
            />
            <Box sx={{ position: "relative", maxWidth: 720 }}>
                <Box
                    component="img"
                    src="/sga-brand.svg"
                    alt="SGA"
                    sx={{ width: 56, height: 56, mb: 3 }}
                />
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{
                        maxWidth: 650,
                        fontWeight: 800,
                        letterSpacing: { xs: "-0.035em", sm: "-0.045em" },
                        fontSize: { xs: "2rem", sm: "2.75rem" },
                        lineHeight: 1.15
                    }}
                >
                    Bienvenido a la aplicación de gestión de alumnos
                </Typography>
                <Typography color="text.secondary" sx={{ maxWidth: 620, lineHeight: 1.8 }}>
                    Esta aplicación permite gestionar la información de los alumnos, incluyendo su creación, edición y eliminación.
                </Typography>
            </Box>
        </Paper>
    )
}