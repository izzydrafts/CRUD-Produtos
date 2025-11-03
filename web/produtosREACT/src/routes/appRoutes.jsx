import { Routes, Route } from "react-router-dom";
import ListarProdutos from "../pages/ListarProdutos";
import NovoProduto from "../pages/NovoProduto";
import EditarProduto from "../pages/EditarProduto";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ListarProdutos />} />
      <Route path="/novo" element={<NovoProduto />} />
      <Route path="/editar/:id" element={<EditarProduto />} />
    </Routes>
  );
}
