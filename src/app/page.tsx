"use client";
import CatalogoFireCloud from "@/components/catalogoFireCloud";
import LogoCarrosel from "@/components/logoCarrosel";
import ProdutosCatalogo from "@/components/produtosCatalogo";
import { Box, Container } from "@mui/material";

export default function Home() {


  return (
    <Container sx={{paddingBottom: 10}}>
      <CatalogoFireCloud />

      <Box mb={5}>
        <LogoCarrosel />
      </Box>

      <ProdutosCatalogo categoria="Para Armazenar" jsonPath="/json/paraArmazenar.json" />
    </Container>
  );
}
