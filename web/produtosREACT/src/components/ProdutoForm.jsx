import React, { useState } from "react";
import { Button, TextField, Stack, CircularProgress } from "@mui/material";

export default function ProdutoForm({ onSubmit, onCancel, loading = false }) {
  const [produto, setProduto] = useState({
    nome: "",
    preco: "",
    descricao: "",
  });

  const handleChange = (e) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(produto);
  };

  if (loading) {
    return <CircularProgress sx={{ display: "block", mx: "auto", my: 4 }} />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Nome"
          name="nome"
          value={produto.nome}
          onChange={handleChange}
          required
          sx={{
            "& label": { color: "#b71c1c" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#000" },
              "&:hover fieldset": { borderColor: "#b71c1c" },
              "&.Mui-focused fieldset": { borderColor: "#b71c1c" },
            },
          }}
        />
        <TextField
          label="Preço"
          name="preco"
          type="number"
          value={produto.preco}
          onChange={handleChange}
          required
          inputProps={{ step: "0.01", min: "0" }}
          sx={{
            "& label": { color: "#b71c1c" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#000" },
              "&:hover fieldset": { borderColor: "#b71c1c" },
              "&.Mui-focused fieldset": { borderColor: "#b71c1c" },
            },
          }}
        />
        <TextField
          label="Descrição"
          name="descricao"
          value={produto.descricao}
          onChange={handleChange}
          multiline
          rows={3}
          sx={{
            "& label": { color: "#b71c1c" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#000" },
              "&:hover fieldset": { borderColor: "#b71c1c" },
              "&.Mui-focused fieldset": { borderColor: "#b71c1c" },
            },
          }}
        />
        <Stack direction="row" spacing={2}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#b71c1c",
              "&:hover": { backgroundColor: "#7f0000" },
            }}
          >
            Salvar
          </Button>
          {onCancel && (
            <Button
              variant="outlined"
              sx={{
                borderColor: "#b71c1c",
                color: "#b71c1c",
                "&:hover": { backgroundColor: "#b71c1c", color: "#fff" },
              }}
              onClick={onCancel}
            >
              Cancelar
            </Button>
          )}
        </Stack>
      </Stack>
    </form>
  );
}
