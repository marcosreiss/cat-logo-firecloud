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

      <ProdutosCatalogo categoria="🎒 Para Armazenar" jsonPath="/json/paraArmazenar.json" />
      <ProdutosCatalogo categoria="🥣 Cuias" jsonPath="/json/cuias.json" />
      <ProdutosCatalogo categoria="📜 Sedas" jsonPath="/json/sedas.json" />
      <ProdutosCatalogo categoria="🔹 Piteiras" jsonPath="/json/piteiras.json" />
      <ProdutosCatalogo categoria="🌿 Tabaco" jsonPath="/json/tabaco.json" />
      <ProdutosCatalogo categoria="✂️ Tesouras" jsonPath="/json/tesouras.json" />
      <ProdutosCatalogo categoria="🔥 Isqueiros" jsonPath="/json/isqueiros.json" />
      <ProdutosCatalogo categoria="🗑️ Cinzeiros" jsonPath="/json/cinzeiros.json" />

    </Box>
  );
}
