"use client";
import CatalogoFireCloud from "@/components/catalogoFireCloud";
import LogoCarrosel from "@/components/logoCarrosel";
import ProdutosCatalogo from "@/components/produtosCatalogo";
import Sidebar from "@/components/Sidebar";
import { Box } from "@mui/material";

export default function Home() {


  return (
    <Box mb={10}>
      <Sidebar />

      <CatalogoFireCloud />

      <LogoCarrosel />

      <ProdutosCatalogo id="armazenar" categoria="🎒 Para Armazenar" jsonPath="/json/paraArmazenar.json" />
      <ProdutosCatalogo id="cuias" categoria="🥣 Cuias" jsonPath="/json/cuias.json" />
      <ProdutosCatalogo id="sedas" categoria="📜 Sedas" jsonPath="/json/sedas.json" />
      <ProdutosCatalogo id="piteiras" categoria="🔹 Piteiras" jsonPath="/json/piteiras.json" />
      <ProdutosCatalogo id="tabaco" categoria="🌿 Tabaco" jsonPath="/json/tabaco.json" />
      <ProdutosCatalogo id="tesouras" categoria="✂️ Tesouras" jsonPath="/json/tesouras.json" />
      <ProdutosCatalogo id="isqueiros" categoria="🔥 Isqueiros" jsonPath="/json/isqueiros.json" />
      <ProdutosCatalogo id="cinzeiros" categoria="🗑️ Cinzeiros" jsonPath="/json/cinzeiros.json" />

    </Box>
  );
}
