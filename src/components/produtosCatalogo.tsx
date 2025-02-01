"use client";

import { useEffect, useState } from "react";
import { Paper, Card, CardContent, Typography, Box, Grid, useMediaQuery, useTheme } from "@mui/material";
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
  const theme = useTheme();
  
  // Responsividade: detecta tamanho da tela
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // < 600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px - 960px
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // > 960px

  useEffect(() => {
    fetch(jsonPath)
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }, [jsonPath]);

  return (
    <Paper
      elevation={3}
      sx={{
        p: isMobile ? 2 : isTablet ? 3 : 4, // Ajuste do padding conforme o tamanho da tela
        maxWidth: isMobile ? "100%" : isTablet ? "90%" : "1200px",
        mx: "auto", // Centraliza o conteúdo
        position: "relative",
        overflow: "hidden",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      }}
    >
      {/* Caixa do título */}
      <Box
        sx={{
          position: "absolute",
          top: isMobile ? 12 : 16, // Ajuste de posicionamento
          left: 0,
          backgroundColor: "black",
          px: isMobile ? 1.5 : 2, // Padding reduzido no mobile
          py: 1,
          borderRadius: "0 10px 10px 0",
          zIndex: 1,
        }}
      >
        <Typography variant={isMobile ? "h5" : isTablet ? "h4" : "h3"} fontWeight="bold" color="white">
          {categoria}
        </Typography>
      </Box>

      {/* Espaçamento extra para evitar sobreposição do título */}
      <Box sx={{ mt: isMobile ? 8 : isTablet ? 10 : 12 }}>
        <Grid container spacing={isMobile ? 2 : isTablet ? 3 : 4}>
          {produtos.map((produto, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: isMobile ? 1.5 : isTablet ? 2 : 2.5,
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    ...(isDesktop ? { transform: "scale(1.05)", boxShadow: 6 } : {}), // Hover apenas no desktop
                  },
                }}
              >
                <Image
                  src={produto.src}
                  alt={produto.nome}
                  width={isMobile ? 60 : isTablet ? 70 : 80}
                  height={isMobile ? 60 : isTablet ? 70 : 80}
                  style={{ borderRadius: "8px" }}
                />
                <CardContent sx={{ flex: 1, ml: isMobile ? 1 : 2 }}>
                  <Typography variant={isMobile ? "body1" : "h6"} fontWeight="medium">
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
    </Paper>
  );
}
