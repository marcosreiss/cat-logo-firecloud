"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import Image from "next/image";

interface Produto {
  src: string;
  nome: string;
  preco: string;
}

interface ProdutosCatalogoProps {
  jsonPath: string;
  categoria: string;
}

export default function ProdutosCatalogo({ jsonPath, categoria }: ProdutosCatalogoProps) {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    fetch(jsonPath)
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }, [jsonPath]);

  return (
    <Box>
      {/* Título da categoria */}
      <Typography variant="h5" fontWeight="bold" mb={2}>
        {categoria}
      </Typography>

      {/* Grid responsivo */}
      <Grid container spacing={2} p="80px 0">
        {produtos.map((produto, index) => (
          <Grid item xs={4} sm={6} md={4} key={index}>
            <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
              <Image src={produto.src} alt={produto.nome} width={80} height={80} />
              <CardContent sx={{ flex: 1, ml: 2 }}>
                <Typography variant="h6">{produto.nome}</Typography>
                <Typography variant="body1" color="primary">
                  {produto.preco}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
