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
    <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 2, md: 4 } }}>
      {/* Título da categoria */}
      <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center">
        {categoria}
      </Typography>

      {/* Grid responsivo */}
      <Grid container spacing={4}>
        {produtos.map((produto, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                borderRadius: 2,
                boxShadow: 3,
                transition: "transform 0.3s, box-shadow 0.3s",
                // Efeito hover apenas para telas maiores (desktop)
                "&:hover": {
                  "@media (min-width:900px)": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                },
              }}
            >
              <Image
                src={produto.src}
                alt={produto.nome}
                width={80}
                height={80}
                style={{ borderRadius: "8px" }}
              />
              <CardContent sx={{ flex: 1, ml: 2 }}>
                <Typography variant="h6" fontWeight="medium">
                  {produto.nome}
                </Typography>
                <Typography variant="body1" color="primary" fontWeight="bold" mt={1}>
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
