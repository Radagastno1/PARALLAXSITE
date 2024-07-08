import { Box, Typography, Button, Grid } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
            color: "#2E8B57", // Mörkgrön text
          }}
        >
          Välkommen till BlomsterGlädje
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#B2D8B2", // Ljusgrön knapp
                color: "#2E8B57", // Mörkgrön text
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "bold",
                padding: "10px 20px",
                "&:hover": {
                  backgroundColor: "#A0C8A0", // Lite mörkare grön vid hover
                },
              }}
            >
              Hem
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#B2D8B2", // Ljusgrön knapp
                color: "#2E8B57", // Mörkgrön text
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "bold",
                padding: "10px 20px",
                "&:hover": {
                  backgroundColor: "#A0C8A0", // Lite mörkare grön vid hover
                },
              }}
            >
              Om Oss
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#B2D8B2", // Ljusgrön knapp
                color: "#2E8B57", // Mörkgrön text
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "bold",
                padding: "10px 20px",
                "&:hover": {
                  backgroundColor: "#A0C8A0", // Lite mörkare grön vid hover
                },
              }}
            >
              Våra Blommor
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#B2D8B2", // Ljusgrön knapp
                color: "#2E8B57", // Mörkgrön text
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "bold",
                padding: "10px 20px",
                "&:hover": {
                  backgroundColor: "#A0C8A0", // Lite mörkare grön vid hover
                },
              }}
            >
              Kontakt
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          position: isSticky ? "fixed" : "relative",
          top: isSticky ? 0 : "auto",
          width: "100%",
          backgroundColor: "#F5F5DC", // Samma bakgrund för att förhindra hoppning
          color: "#2E8B57", // Mörkgrön text
          textAlign: "center",
          padding: isSticky ? "10px 0" : 0,
          zIndex: isSticky ? 999 : 1, // Prioritet när sticky
          boxShadow: isSticky ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none", // Liten skugga när sticky
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button
              variant="text"
              sx={{
                color: "#2E8B57",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "bold",
                "&:hover": {
                  color: "#A0C8A0",
                },
              }}
            >
              Hem
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="text"
              sx={{
                color: "#2E8B57",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "bold",
                "&:hover": {
                  color: "#A0C8A0",
                },
              }}
            >
              Om Oss
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="text"
              sx={{
                color: "#2E8B57",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "bold",
                "&:hover": {
                  color: "#A0C8A0",
                },
              }}
            >
              Våra Blommor
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="text"
              sx={{
                color: "#2E8B57",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "bold",
                "&:hover": {
                  color: "#A0C8A0",
                },
              }}
            >
              Kontakt
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
