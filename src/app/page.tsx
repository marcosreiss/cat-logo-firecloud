"use client";
import { Box, Container } from "@mui/material";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"; // Faltava importar SwiperSlide
import "swiper/css";
import "swiper/css/autoplay";

export default function Home() {
  const brands: string[] = [
    "/brands/bem_bolado.webp",
    "/brands/cremaria.webp",
    "/brands/la_revolucion.webp",
    "/brands/logo_aleda.webp",
    "/brands/papelito.webp",
    "/brands/smoking_master.webp",
    "/brands/tatu_do_bem.webp",
    "/brands/to_na_be_.webp",
  ];

  return (
    <Container>
      <Image
        src="/assets/catalogo.webp"
        alt="Descrição da imagem"
        width={600}
        height={200}
        style={{ margin: "auto" }}
      />

      <Box mt={6}>
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          loop={true}
          speed={5000} // Velocidade da rolagem contínua
          autoplay={{
            delay: 0, // Sem pausas
            disableOnInteraction: false, // Continua rodando mesmo após interação
          }}
          freeMode={true} // Permite rolagem livre, sem "travar" nos slides
          modules={[Autoplay]}
          style={{ padding: "20px 0", width: "100vw" }}
        >
          {brands.concat(brands).map((src, index) => (
            <SwiperSlide key={index} style={{ width: "auto" }}>
              <Image src={src} alt={`Logo ${index}`} width={150} height={75} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
}
