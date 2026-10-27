import { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

const API_ALUMNOS = "/api/alumnos"

function FormularioA({ onAlumnoCreado, alumnoEditar, onCancelar }){
    const [formulario, setFormulario] = useState({
        legajo: String(alumnoEditar?.legajo ?? ""),
        nombre: alumnoEditar?.nombre ?? "",
        carrera: alumnoEditar?.carrera ?? "",
        correo: alumnoEditar?.correo ?? ""
    })
    const [error, setError] = useState("")
    const [guardando, setGuardando] = useState(false)

    function manejarCambio(e) {
        const { name, value} = e.target

        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    async function guardar(e) {
        e.preventDefault()
        setError("")
        setGuardando(true)

        const alumno = {
            ...formulario,
            legajo: Number(formulario.legajo)
        }
        const editando = Boolean(alumnoEditar)
        const url = editando
                    ? `${API_ALUMNOS}/${alumnoEditar.legajo}`
                    : API_ALUMNOS
        try {
            const respuesta = await fetch(url, {
                method: editando ? "PUT" : "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(alumno)
            })

            if (!respuesta.ok) {
                throw new Error(`No se pudo guardar el alumno. Estado HTTP: ${respuesta.status}`)
            }

            setFormulario({
                legajo: "",
                nombre: "",
                carrera: "",
                correo: ""
            })
            onAlumnoCreado()
        } catch (error) {
            console.error("Error al guardar:", error)
            setError(error.message || "No se pudo conectar con el servidor")
        } finally {
            setGuardando(false)
        }
    }
    function cancelar(){
        onCancelar()
    }
    return(
        <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>
                {alumnoEditar ? "Editar alumno" : "Nuevo alumno"}
            </Typography>
            <Box component="form" onSubmit={guardar}>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                        gap: 2
                    }}
                >
                    <TextField
                        id="legajo"
                        name="legajo"
                        label="Legajo"
                        value={formulario.legajo}
                        onChange={manejarCambio}
                        required
                        slotProps={{ htmlInput: { inputMode: "numeric" } }}
                    />
                    <TextField
                        id="nombre"
                        name="nombre"
                        label="Nombre"
                        value={formulario.nombre}
                        onChange={manejarCambio}
                        required
                    />
                    <TextField
                        id="carrera"
                        name="carrera"
                        label="Carrera"
                        value={formulario.carrera}
                        onChange={manejarCambio}
                        required
                    />
                    <TextField
                        id="correo"
                        name="correo"
                        label="Correo"
                        type="email"
                        value={formulario.correo}
                        onChange={manejarCambio}
                        required
                    />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1.5, mt: 3 }}>
                    {alumnoEditar && (
                        <Button
                            type="button"
                            variant="outlined"
                            onClick={cancelar}
                            disabled={guardando}
                        >
                            Cancelar
                        </Button>
                    )}
                    <Button type="submit" variant="contained" disabled={guardando}>
                        {guardando
                            ? "Guardando..."
                            : alumnoEditar
                                ? "Guardar cambios"
                                : "Guardar"}
                    </Button>
                </Box>
                {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
            </Box>
        </Paper>
    )
}
export default FormularioA