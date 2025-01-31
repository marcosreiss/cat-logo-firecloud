"use client";
import { Box, Container } from "@mui/material";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

export default function Home() {
  const brands: string[] = [
    "/brands/logo_papelito.webp",
    "/brands/logo_larevolucion.webp",
    "/brands/logo_smoking_master.webp",
    "/brands/logo_cremaria.webp",
    "/brands/logo_bem_bolado.webp",
    "/brands/logo_tatu_do_bem.webp",
    "/brands/logo_aleda03.webp",
    "/brands/logo_to_na_be.webp",
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
          spaceBetween={70}
          slidesPerView="auto"
          loop={true}
          speed={5000}
          autoplay={{
            delay: -1,
            disableOnInteraction: false,
          }}
          freeMode={true}
          modules={[Autoplay]}
          style={{
            padding: "20px 0",
            width: "96vw",
            position: "absolute",
            left: 30,
            display: "flex",
            alignItems: "center",
          }}
        >
          {brands.concat(brands).map((src, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: "auto",
                display: "flex",
                alignItems: "center", // Alinha verticalmente ao centro
                justifyContent: "center",
              }}
            >
              <Image src={src} alt={`Logo ${index}`} width={150} height={75} />
            </SwiperSlide>
          ))}
        </Swiper>

      </Box>
    </Container>
  );
}
