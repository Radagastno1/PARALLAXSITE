import { Box, Button, Grid, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import StickyHeader from "./StickyHeader";

export default function MenuSection() {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current) {
        setIsSticky(
          window.scrollY >
            menuRef.current.offsetTop + menuRef.current.offsetHeight
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut" },
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (menuRef.current) {
      observer.observe(menuRef.current);
    }

    return () => {
      if (menuRef.current) {
        observer.unobserve(menuRef.current);
      }
    };
  }, [controls]);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        margin: 0,
        minHeight: 400,
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
        width: "100%",
        zIndex: 1,
      }}
    >
      <Box
        ref={menuRef}
        sx={{
          flexDirection: "column",
          margin: 0,
          width: "100%",
          backgroundImage:
            'url("https://images.pexels.com/photos/583850/pexels-photo-583850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          minHeight: "500px",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "1.5rem",
          textAlign: "center",
          padding: 4,
        }}
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <Typography
          sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: 4,
            fontFamily: "'Montserrat', sans-serif",
            color: "#2E8B57",
          }}
        >
          Välkommen till BlomsterGlädje
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <Button
              onClick={() => {
                navigate("/");
              }}
              variant="contained"
              sx={{
                backgroundColor: "#B2D8B2",
                color: "#2E8B57",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "bold",
                padding: "10px 20px",
                "&:hover": {
                  backgroundColor: "#A0C8A0",
                },
              }}
            >
              Hem
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/about");
              }}
              sx={{
                backgroundColor: "#B2D8B2",
                color: "#2E8B57",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "bold",
                padding: "10px 20px",
                "&:hover": {
                  backgroundColor: "#A0C8A0",
                },
              }}
            >
              Om Oss
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/ourflowers");
              }}
              sx={{
                backgroundColor: "#B2D8B2",
                color: "#2E8B57",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "bold",
                padding: "10px 20px",
                "&:hover": {
                  backgroundColor: "#A0C8A0",
                },
              }}
            >
              Våra Blommor
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                navigate("/contact");
              }}
              variant="contained"
              sx={{
                backgroundColor: "#B2D8B2",
                color: "#2E8B57",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "bold",
                padding: "10px 20px",
                "&:hover": {
                  backgroundColor: "#A0C8A0",
                },
              }}
            >
              Kontakt
            </Button>
          </Grid>
        </Grid>
      </Box>
      <StickyHeader isSticky={isSticky} />
    </Box>
  );
}
