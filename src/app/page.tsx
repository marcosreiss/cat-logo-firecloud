"use client";
import CatalogoFireCloud from "@/components/catalogoFireCloud";
import LogoCarrosel from "@/components/logoCarrosel";
import ProdutosCatalogo from "@/components/produtosCatalogo";
import { Box } from "@mui/material";

export default function Home() {


  return (
    <Box mb={10}>
      <CatalogoFireCloud />

      <LogoCarrosel />

      <ProdutosCatalogo categoria="Para Armazenar" jsonPath="/json/paraArmazenar.json" />

    </Box>
  );
}
