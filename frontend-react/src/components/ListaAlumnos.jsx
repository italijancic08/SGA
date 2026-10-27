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

const API_ALUMNOS = "/api/alumnos"

export function ListaAlumnos({ actualizar, onAlumnoCreado, onEditarAlumno }) {
    const [alumnos, setAlumnos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState("")

    async function eliminarAlumno(legajo){
        const confirmar = window.confirm("¿Seguro que querés eliminar este alumno?")
        if (!confirmar) {
            return
        }
        try {
            const respuesta = await fetch(`${API_ALUMNOS}/${legajo}`,
                { method: "DELETE" }
            )
            if (!respuesta.ok) {
                throw new Error(`No se pudo eliminar. Estado HTTP: ${respuesta.status}`)
            }
            onAlumnoCreado()
        } catch (error) {
            console.error("Error al eliminar: ", error)
            alert(error.message || "No se pudo elimnar alumno")
        }
    }
    useEffect(() => {
        async function cargarAlumnos(){
            setCargando(true)
            setError("")

            try {
                const respuesta = await fetch(API_ALUMNOS)

                if (!respuesta.ok){
                    throw new Error("No se pudo obtener la lista", respuesta.status)
                }

                const datos = await respuesta.json()
                setAlumnos(datos)
            } catch(error) {
                console.error("Error de conexión", error)
                setError("No se pudo cargar la lista de alumnos.")
            } finally {
                setCargando(false)
            }
        }
        cargarAlumnos()
    }, [actualizar])

    if (cargando) {
        return <Typography>Cargando alumnos...</Typography>
    }
    if (error) {
        return <Alert severity="error">{error}</Alert>
    }
    return (
        <section>
            <Typography variant="h5" component="h2" gutterBottom>
                Alumnos
            </Typography>
            {alumnos.length === 0
                ? (<Typography color="text.secondary">No hay alumnos registrados.</Typography>)
                : (
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Legajo</TableCell>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Carrera</TableCell>
                                    <TableCell>Correo</TableCell>
                                    <TableCell align="right">Acciones</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {alumnos.map(alumno => (
                                    <TableRow key={alumno.legajo} hover>
                                        <TableCell>{alumno.legajo}</TableCell>
                                        <TableCell>{alumno.nombre}</TableCell>
                                        <TableCell>{alumno.carrera}</TableCell>
                                        <TableCell>{alumno.correo}</TableCell>
                                        <TableCell align="right">
                                            <Button
                                                size="small"
                                                type="button"
                                                onClick={() => onEditarAlumno(alumno)}
                                            >
                                                Editar
                                            </Button>
                                            <Button
                                                size="small"
                                                color="error"
                                                type="button"
                                                onClick={() => eliminarAlumno(alumno.legajo)}
                                            >
                                                Eliminar
                                            </Button>
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