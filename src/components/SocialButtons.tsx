"use client";

import { Box, IconButton, Tooltip, useMediaQuery, useTheme } from "@mui/material";
import { WhatsApp, Instagram, LocationOn } from "@mui/icons-material";

interface SocialButtonsProps {
  whatsapp: string;
  instagram: string;
  location: string;
}

const SocialButtons = ({ whatsapp, instagram, location }: SocialButtonsProps) => {
  const theme = useTheme();
  
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // < 600px
//   const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px - 960px
//   const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // > 960px

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: isMobile ? 5 : 20,
        display: "flex",
        flexDirection: "column",
        gap: isMobile ? 1 : 1.5, // Reduz espaçamento no mobile
        zIndex: 10,
      }}
    >
      {/* Botão do WhatsApp */}
      <Tooltip title="WhatsApp">
        <IconButton
          component="a"
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: "#25D366",
            color: "white",
            width: isMobile ? 40 : 56,  // Tamanho menor no mobile
            height: isMobile ? 40 : 56, 
            "&:hover": { backgroundColor: "#1DA851" },
          }}
        >
          <WhatsApp fontSize={isMobile ? "medium" : "large"} />
        </IconButton>
      </Tooltip>

      {/* Botão do Instagram */}
      <Tooltip title="Instagram">
        <IconButton
          component="a"
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: "#E1306C",
            color: "white",
            width: isMobile ? 40 : 56, 
            height: isMobile ? 40 : 56, 
            "&:hover": { backgroundColor: "#C0275F" },
          }}
        >
          <Instagram fontSize={isMobile ? "medium" : "large"} />
        </IconButton>
      </Tooltip>

      {/* Botão de Localização */}
      <Tooltip title="Localização">
        <IconButton
          component="a"
          href={location}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: "#FF5733",
            color: "white",
            width: isMobile ? 40 : 56, 
            height: isMobile ? 40 : 56, 
            "&:hover": { backgroundColor: "#D94729" },
          }}
        >
          <LocationOn fontSize={isMobile ? "medium" : "large"} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default SocialButtons;
