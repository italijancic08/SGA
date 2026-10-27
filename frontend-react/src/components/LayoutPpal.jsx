import { Outlet } from "react-router-dom"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function LayoutPpal() {
    return (
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", bgcolor: "background.default" }}>
            <Header />
            <Container
                maxWidth="lg"
                component="main"
                sx={{ flex: 1, py: { xs: 3, sm: 5 }, px: { xs: 2, sm: 3 } }}
            >
                <Outlet />
            </Container>
            <Footer />
        </Box>
    )
}