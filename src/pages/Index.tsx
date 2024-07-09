import { Box, Typography } from "@mui/material";
import { useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AboutUsIndex from "../components.tsx/AboutUsIndex";
import WebsitePresentation from "../components.tsx/WebSitePresent";
import ZeroettPresentation from "../components.tsx/ZeroettPresent";

export default function Index() {
  const iconsRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (iconsRef.current) {
        const top = iconsRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.2 },
      }));
    }
  }, [isVisible, controls]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        margin: 0,
        overflowX: "hidden",
        width: "100%",
        alignItems: "start",
        flexGrow: 1,
        minHeight: "100vh",
      }}
    >
      <Box
        ref={iconsRef}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#254336", 
          color: "#DAD3BE", 
          margin: 0,
          width: "100%",
          textAlign: "center",
        }}
        component={"h1"}
      >
        <Typography
          sx={{
            fontSize: "4rem",
            fontWeight: "bold",
            letterSpacing: 5,
            fontFamily: "'Montserrat', sans-serif",
            color: "#DAD3BE", 
          }}
        >
          BlomsterGlädje
        </Typography>
      </Box>
      <ZeroettPresentation />
      <AboutUsIndex />
      <WebsitePresentation />
    </Box>
  );
}
