import { Container } from "@mui/material";
import Image from "next/image";

export default function Home() {
  

  return (
    <Container>
      <Image
        src="/assets/catalogo.webp"
        alt="Descrição da imagem" // Adicione um texto descritivo aqui
        width={600}
        height={200}
        style={{margin: "auto"}}
      />
    </Container>
  );
}
