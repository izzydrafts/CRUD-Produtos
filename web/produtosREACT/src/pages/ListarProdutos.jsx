import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Stack } from "@mui/material";
import api from "../services/api";
import ProdutoTable from "../components/ProdutoTable";

export default function ListarProdutos() {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  const carregarProdutos = async () => {
    try {
      const response = await api.get("/");
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  };

  const excluirProduto = async (id) => {
    try {
      await api.delete(`/${id}`);
      carregarProdutos(); // Recarrega a tabela
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
    }
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Stack direction="row" justifyContent="flex-start" alignItems="center" mb={2}>
        <Typography variant="h4" component="h1">
          Lista de Produtos
        </Typography>
      </Stack>

      <ProdutoTable
        produtos={produtos}
        onDelete={excluirProduto}
        onEdit={(id) => navigate(`/editar/${id}`)}
        mostrarDescricao={true}
      />
    </div>
  );
}

