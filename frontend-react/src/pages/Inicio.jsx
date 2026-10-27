import Typography from "@mui/material/Typography"

export default function Inicio() {
    return (
        <>
            <Typography variant="h4" component="h1" gutterBottom>
                Bienvenido a la aplicación de gestión de alumnos
            </Typography>
            <Typography color="text.secondary">
                Esta aplicación permite gestionar la información de los alumnos, incluyendo su creación, edición y eliminación.
            </Typography>
        </>
    )
}