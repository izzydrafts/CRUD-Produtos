import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProdutoForm from "../components/ProdutoForm";
import api from "../services/api";

export default function EditarProduto() {
  const { id } = useParams(); // pega o id da URL
  const navigate = useNavigate();
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarProduto = async () => {
      try {
        const response = await api.get(`/${id}`); // busca produto pelo id
        setProduto(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar produto:", error);
        alert("Não foi possível carregar o produto.");
        setLoading(false);
      }
    };
    carregarProduto();
  }, [id]);

  const salvarProduto = async (dados) => {
    try {
      await api.put(`/${id}`, { ...dados, preco: parseFloat(dados.preco) || 0 });
      alert("Produto atualizado com sucesso!");
      navigate("/"); // volta para lista
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
      alert("Erro ao atualizar produto. Veja o console.");
    }
  };

  if (loading) return <p style={{ color: "#fff", textAlign: "center" }}>Carregando...</p>;
  if (!produto) return null;

  return (
    <div
      style={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <ProdutoForm
        initialData={produto}   // carrega dados do produto
        onSubmit={salvarProduto} // envia atualização
        onCancel={() => navigate("/")} // botão cancelar
      />
    </div>
  );
}
