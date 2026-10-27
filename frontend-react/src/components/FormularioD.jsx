import { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutlineOutlined";

const API_DOCENTES = "/api/docentes"

function FormularioD({ onDocenteCreado, docenteEditar, onCancelar }){
    const [formulario, setFormulario] = useState({
        dni: String(docenteEditar?.dni ?? ""),
        nombre: docenteEditar?.nombre ?? "",
        especialidad: docenteEditar?.especialidad ?? "",
        correo: docenteEditar?.correo ?? ""
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

        const docente = {
            ...formulario,
            dni: Number(formulario.dni)
        }
        const editando = Boolean(docenteEditar)
        const url = editando
                    ? `${API_DOCENTES}/${docenteEditar.dni}`
                    : API_DOCENTES
        try {
            const respuesta = await fetch(url, {
                method: editando ? "PUT" : "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(docente)
            })

            if (!respuesta.ok) {
                throw new Error(`No se pudo guardar el docente. Estado HTTP: ${respuesta.status}`)
            }

            setFormulario({
                dni: "",
                nombre: "",
                especialidad: "",
                correo: ""
            })
            onDocenteCreado()
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
        <Paper
            elevation={0}
            sx={{
                p: { xs: 2, sm: 3.5 },
                mb: 4,
                border: 1,
                borderColor: "divider",
                borderRadius: 3,
                bgcolor: "background.paper"
            }}
        >
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
                {docenteEditar ? "Editar docente" : "Nuevo docente"}
            </Typography>
            <Box component="form" onSubmit={guardar} sx={{ mt: 2 }}>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
                        gap: { xs: 1.75, sm: 2 }
                    }}
                >
                    <TextField
                        id="dni"
                        name="dni"
                        label="DNI"
                        value={formulario.dni}
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
                        id="especialidad"
                        name="especialidad"
                        label="Especialidad"
                        value={formulario.especialidad}
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
                <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1.5, mt: 3, flexWrap: "wrap" }}>
                    {docenteEditar && (
                        <Button
                            type="button"
                            variant="outlined"
                            onClick={cancelar}
                            disabled={guardando}
                            sx={{ borderRadius: 2, minHeight: 42 }}
                        >
                            Cancelar
                        </Button>
                    )}
                    <Button type="submit" variant="contained" disabled={guardando} sx={{ borderRadius: 2, minHeight: 42, px: 2.5 }}>
                        {guardando
                            ? "Guardando..."
                            : docenteEditar
                                ? "Guardar cambios"
                                : "Guardar"}
                    </Button>
                </Box>
                {error && (
                    <Alert
                        severity="error"
                        variant="filled"
                        icon={<ErrorOutlineIcon />}
                        sx={{ mt: 2, borderRadius: 2, alignItems: "center" }}
                    >
                        {error}
                    </Alert>
                )}
            </Box>
        </Paper>
    )
}
export default FormularioD