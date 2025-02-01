import Image from "next/image";

const CatalogoFireCloud = () => {
  return (
    <Image
      src="/assets/catalogo.webp"
      alt="Descrição da imagem"
      width={600}
      height={200}
      style={{
        display: "block", // Garante que a imagem possa ser centralizada corretamente
        margin: "auto", // Centraliza horizontalmente
        width: "auto", // Mantém a proporção da largura
        height: "auto", // Mantém a proporção da altura
      }}
      priority // Carregamento prioritário para melhorar o LCP
    />
  );
};

export default CatalogoFireCloud;
