import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function NavBar() {
  const location = useLocation();

  return (
    <AppBar
      position="static"
      sx={{
        borderRadius: 0,
        backgroundColor: "#000", // fundo preto
        color: "#fff", // texto branco padrão
      }}
    >
      <Toolbar>
        <Stack direction="row" spacing={2}>
          <Button
            component={RouterLink}
            to="/"
            startIcon={<ListAltIcon />}
            sx={{
              fontWeight: location.pathname === "/" ? "bold" : "normal",
              backgroundColor: location.pathname === "/" ? "#b71c1c" : "transparent", // vermelho escuro quando ativo
              color: location.pathname === "/" ? "#fff" : "#fff",
              "&:hover": {
                backgroundColor: "#d32f2f", // vermelho claro no hover
              },
            }}
          >
            Produtos
          </Button>

          <Button
            component={RouterLink}
            to="/novo"
            startIcon={<AddCircleOutlineIcon />}
            sx={{
              fontWeight: location.pathname === "/novo" ? "bold" : "normal",
              backgroundColor: location.pathname === "/novo" ? "#b71c1c" : "transparent",
              color: location.pathname === "/novo" ? "#fff" : "#fff",
              "&:hover": {
                backgroundColor: "#d32f2f",
              },
            }}
          >
            Novo Produto
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
