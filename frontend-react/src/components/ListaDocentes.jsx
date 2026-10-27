import { useEffect, useState } from "react"
import Typography from "@mui/material/Typography"
import Alert from "@mui/material/Alert"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Box from "@mui/material/Box"
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutlineOutlined"
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined"

const API_DOCENTES = "/api/docentes"

export function ListaDocentes({ actualizar, onDocenteCreado, onEditarDocente }) {
    const [docentes, setDocentes] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState("")

    async function eliminarDocente(dni){
        const confirmar = window.confirm("¿Seguro que querés eliminar este docente?")
        if (!confirmar) {
            return
        }
        try {
            const respuesta = await fetch(`${API_DOCENTES}/${dni}`,
                { method: "DELETE" }
            )
            if (!respuesta.ok) {
                throw new Error(`No se pudo eliminar. Estado HTTP: ${respuesta.status}`)
            }
            onDocenteCreado()
        } catch (error) {
            console.error("Error al eliminar: ", error)
            alert(error.message || "No se pudo elimnar el docente")
        }
    }
    useEffect(() => {
        async function cargarDocentes(){
            setCargando(true)
            setError("")

            try {
                const respuesta = await fetch(API_DOCENTES)

                if (!respuesta.ok){
                    throw new Error("No se pudo obtener la lista", respuesta.status)
                }

                const datos = await respuesta.json()
                setDocentes(datos)
            } catch(error) {
                console.error("Error de conexión", error)
                setError("No se pudo cargar la lista de docentes.")
            } finally {
                setCargando(false)
            }
        }
        cargarDocentes()
    }, [actualizar])

    if (cargando) {
        return <Typography>Cargando docentes...</Typography>
    }
    if (error) {
        return (
            <Alert
                severity="error"
                variant="filled"
                icon={<ErrorOutlineIcon />}
                sx={{ borderRadius: 2, alignItems: "center" }}
            >
                {error}
            </Alert>
        )
    }
    return (
        <section>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
                Docentes
            </Typography>
            {docentes.length === 0
                ? (
                    <Paper
                        elevation={0}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 1,
                            minHeight: 190,
                            p: { xs: 3, sm: 4 },
                            border: 1,
                            borderColor: "divider",
                            borderRadius: 3,
                            bgcolor: "background.paper",
                            textAlign: "center"
                        }}
                    >
                        <Box
                            sx={{
                                display: "grid",
                                placeItems: "center",
                                width: 52,
                                height: 52,
                                mb: 0.5,
                                borderRadius: "50%",
                                bgcolor: "action.hover",
                                color: "primary.main"
                            }}
                        >
                            <GroupsOutlinedIcon />
                        </Box>
                        <Typography sx={{ fontWeight: 700, color: "text.primary" }}>
                            No hay docentes registrados.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Los docentes que agregues aparecerán en esta lista.
                        </Typography>
                    </Paper>
                )
                : (
                    <TableContainer
                        component={Paper}
                        elevation={0}
                        sx={{ border: 1, borderColor: "divider", borderRadius: 3, overflowX: "auto" }}
                    >
                        <Table sx={{ minWidth: 680 }}>
                            <TableHead>
                                <TableRow sx={{ bgcolor: "action.hover" }}>
                                    <TableCell sx={{ fontWeight: 700, whiteSpace: "nowrap" }}>DNI</TableCell>
                                    <TableCell sx={{ fontWeight: 700 }}>Nombre</TableCell>
                                    <TableCell sx={{ fontWeight: 700 }}>Especialidad</TableCell>
                                    <TableCell sx={{ fontWeight: 700 }}>Correo</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 700 }}>Acciones</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {docentes.map(docente => (
                                    <TableRow key={docente.dni} hover>
                                        <TableCell>{docente.dni}</TableCell>
                                        <TableCell>{docente.nombre}</TableCell>
                                        <TableCell>{docente.especialidad}</TableCell>
                                        <TableCell>{docente.correo}</TableCell>
                                        <TableCell align="right">
                                            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 0.5 }}>
                                                <Button
                                                    size="small"
                                                    type="button"
                                                    onClick={() => onEditarDocente(docente)}
                                                    sx={{ borderRadius: 2 }}
                                                >
                                                    Editar
                                                </Button>
                                                <Button
                                                    size="small"
                                                    color="error"
                                                    type="button"
                                                    onClick={() => eliminarDocente(docente.dni)}
                                                    sx={{ borderRadius: 2 }}
                                                >
                                                    Eliminar
                                                </Button>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
        </section>
    )
}