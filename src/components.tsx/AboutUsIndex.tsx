import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function AboutUsIndex() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: "easeOut" },
      });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <Box
      ref={ref}
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        background: "linear-gradient(135deg, #254336 0%, #6B8A7A 100%)",
        padding: 4,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundImage: `url("https://i.imgur.com/kKyCoTP.png")`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "brightness(0.5)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        sx={{
          maxWidth: "800px",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography
            sx={{
              fontSize: { xs: 36, md: 48 },
              fontWeight: "bold",
              marginBottom: 2,
              letterSpacing: 1,
            }}
          >
            Om oss
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typography
            sx={{
              fontSize: { xs: 18, md: 24 },
              maxWidth: "600px",
              marginBottom: 4,
            }}
          >
            BlomsterGlädje AB är en blomsterhandel med rötterna i hjärtat av
            Stockholm. Vi erbjuder ett brett utbud av färska blommor,
            arrangemang och växter för alla tillfällen.
          </Typography>
        </motion.div>
      </motion.div>

      <Box
        sx={{
          maxWidth: "800px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          padding: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 24, md: 36 },
            fontWeight: "bold",
            marginBottom: 2,
            letterSpacing: 1,
          }}
        >
          Kontaktuppgifter
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <IconButton
              sx={{
                color: "white",
                backgroundColor: "#6B8A7A",
                "&:hover": {
                  backgroundColor: "#B7B597",
                },
              }}
              href="mailto:info@blomstergladje.se"
            >
              <MailOutlineIcon />
            </IconButton>
            <Typography variant="body1" sx={{ marginTop: 1, color: "white" }}>
              info@blomstergladje.se
            </Typography>
          </Grid>
          <Grid item>
            <IconButton
              sx={{
                color: "white",
                backgroundColor: "#6B8A7A",
                "&:hover": {
                  backgroundColor: "#B7B597",
                },
              }}
              href="tel:+46812345678"
            >
              <PhoneIcon />
            </IconButton>
            <Typography variant="body1" sx={{ marginTop: 1, color: "white" }}>
              +46 8 123 456 78
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", marginTop: 4 }}>
          <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
            Öppettider
          </Typography>
          <Typography sx={{ fontSize: 18 }}>
            Måndag - Fredag: 09:00 - 18:00
          </Typography>
          <Typography sx={{ fontSize: 18 }}>Lördag: 10:00 - 16:00</Typography>
          <Typography sx={{ fontSize: 18 }}>Söndag: Stängt</Typography>
        </Box>
      </Box>
    </Box>
  );
}
