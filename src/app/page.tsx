import { Container } from "@mui/material";
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

      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        {brands.map((src, index) => (
          <SwiperSlide key={index}>
            <Image src={src} alt={`Logo ${index}`} width={200} height={100} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
