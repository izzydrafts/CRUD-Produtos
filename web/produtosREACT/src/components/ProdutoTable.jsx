import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';

export default function ProdutoTable({ produtos, onDelete, onEdit }) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: 2,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#b71c1c' }}>
            <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>ID</TableCell>
            <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Nome</TableCell>
            <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Preço</TableCell>
            <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Descrição</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {produtos.map((produto) => (
            <TableRow key={produto.id} sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
              <TableCell>{produto.id}</TableCell>
              <TableCell>{produto.nome}</TableCell>
              <TableCell>R$ {Number(produto.preco).toFixed(2)}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  sx={{
                    mr: 1,
                    borderColor: '#000',
                    color: '#000',
                    '&:hover': { backgroundColor: '#000', color: '#fff' },
                  }}
                  onClick={() => onEdit(produto.id)}
                >
                  Editar
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: '#b71c1c',
                    color: '#b71c1c',
                    '&:hover': { backgroundColor: '#b71c1c', color: '#fff' },
                  }}
                  onClick={() => onDelete(produto.id)}
                >
                  Excluir
                </Button>
              </TableCell>
            </TableRow>
          ))}
          {produtos.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} align="center" sx={{ color: '#b71c1c', fontStyle: 'italic' }}>
                Nenhum produto cadastrado
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
