"use client";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

const LogoCarrosel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detecta telas menores que 600px

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
    <Box
      sx={{
        width: "98vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "50px auto",
        paddingLeft: isMobile ? 2 : 6, // Reduz padding lateral em telas menores
        paddingRight: isMobile ? 2 : 6,
      }}
    >
      <Swiper
        spaceBetween={isMobile ? 30 : 50} // Ajusta espaço entre os logos no mobile
        slidesPerView={isMobile ? 3 : 5} // Mostra menos logos em telas pequenas
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
            <Image src={src} alt={`Logo ${index}`} width={isMobile ? 100 : 150} height={isMobile ? 50 : 75} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default LogoCarrosel;
