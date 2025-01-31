"use client";
import CatalogoFireCloud from "@/components/catalogoFireCloud";
import LogoCarrosel from "@/components/logoCarrosel";
import ProdutosCatalogo from "@/components/produtosCatalogo";
import { Box, Container } from "@mui/material";

export default function Home() {


  return (
    <Container>
      <CatalogoFireCloud />

      <Box mb={35}>
        <LogoCarrosel />
      </Box>

      <ProdutosCatalogo categoria="Para Armazenar" jsonPath="/json/paraArmazenar.json" />
    </Container>
  );
}
