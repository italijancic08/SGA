import { Outlet } from "react-router-dom"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function LayoutPpal() {
    return (
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <Container maxWidth="md" component="main" sx={{ flex: 1, py: 4 }}>
                <Outlet />
            </Container>
            <Footer />
        </Box>
    )
}