import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Paper, Stack } from "@mui/material";
import ProdutoForm from "../components/ProdutoForm";
import api from "../services/api";

export default function NovoProduto() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const criarProduto = async (produto) => {
    try {
      setLoading(true);
      const produtoFormatado = { ...produto, preco: parseFloat(produto.preco) || 0 };
      await api.post("/", produtoFormatado);
      setLoading(false);
      alert("Produto criado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error("Erro ao criar produto:", error);
      setLoading(false);
      alert("Erro ao criar produto. Veja o console.");
    }
  };

  const cancelar = () => navigate("/");

  return (
    <div
      style={{
        backgroundColor: "#121212", // fundo da página mais escuro, não totalmente preto
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Paper
        sx={{
          padding: 4,
          maxWidth: 600,
          mx: "auto",
          backgroundColor: "#f8f3f3ff", // fundo do formulário em preto
          color: "#fff",
        }}
      >
        <Stack spacing={2}>
          <Typography
            variant="h4"
            component="h1"
            sx={{ color: "#b71c1c", fontWeight: "bold" }}
          >
            Novo Produto
          </Typography>

          <ProdutoForm onSubmit={criarProduto} onCancel={cancelar} loading={loading} />
        </Stack>
      </Paper>
    </div>
  );
}
