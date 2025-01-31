import { Box } from "@mui/material";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

const LogoCarrosel = () => {
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
        <Box mt={6}>
        <Swiper
          spaceBetween={80}
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
    );
}

export default LogoCarrosel;