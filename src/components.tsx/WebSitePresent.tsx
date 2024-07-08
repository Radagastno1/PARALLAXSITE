import { Box, Button, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function WebsitePresentation() {
  const AnimatedBox = ({ children }) => {
    const { ref, inView } = useInView({
      threshold: 0.1,
      triggerOnce: false,
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        textAlign: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, #254336 0%, #6B8A7A 100%)", // Använder den föreslagna färgpaletten för bakgrund
        padding: 4,
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundImage: `url("https://i.imgur.com/kKyCoTP.png")`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: -1,
          filter: "brightness(0.5)",
        }}
      />

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            padding: 4,
            zIndex: 2,
            textAlign: "left",
            color: "#DAD3BE", // Använder den ljusare beige färgen för text
          }}
        >
          <AnimatedBox>
            <Typography
              sx={{
                fontSize: { xs: 24, md: 40 },
                marginBottom: 2,
                letterSpacing: 2,
                color: "#DAD3BE", // Använder den ljusare beige färgen för text
              }}
            >
              Blomsterarrangemang
            </Typography>
          </AnimatedBox>
          <AnimatedBox>
            <Box
              sx={{
                fontSize: { xs: 18, md: 20 },
                marginBottom: 4,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography sx={{ color: "#DAD3BE" }}>
                Bröllopsblommor{" "}
              </Typography>
              <Typography sx={{ color: "#DAD3BE" }}>
                Begravningsarrangemang
              </Typography>
              <Typography sx={{ color: "#DAD3BE" }}>
                Fest- och eventblommor
              </Typography>
              <Typography sx={{ color: "#DAD3BE" }}>
                Färdiga buketter
              </Typography>
            </Box>
          </AnimatedBox>
          <Button
            sx={{
              backgroundColor: "#B7B597", // Använder den beige-gröna färgen för knappar
              color: "#254336", // Använder den mörkgröna färgen för text på knappar
              "&:hover": {
                backgroundColor: "#DAD3BE", // Ljusare färg vid hover
              },
            }}
            variant="contained"
          >
            Läs mer
          </Button>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            padding: 4,
            zIndex: 2,
            textAlign: "left",
            color: "#DAD3BE", // Använder den ljusare beige färgen för text
          }}
        >
          <AnimatedBox>
            <Typography
              sx={{
                fontSize: { xs: 24, md: 40 },
                marginBottom: 2,
                letterSpacing: 2,
                color: "#DAD3BE", // Använder den ljusare beige färgen för text
              }}
            >
              Växtförsäljning
            </Typography>
          </AnimatedBox>
          <AnimatedBox>
            <Box
              sx={{
                fontSize: { xs: 18, md: 20 },
                marginBottom: 4,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography sx={{ color: "#DAD3BE" }}>Inomhusväxter</Typography>
              <Typography sx={{ color: "#DAD3BE" }}>Utomhusväxter</Typography>
              <Typography sx={{ color: "#DAD3BE" }}>
                Krukor och planteringskärl
              </Typography>
            </Box>
          </AnimatedBox>
          <Button
            sx={{
              backgroundColor: "#B7B597", // Använder den beige-gröna färgen för knappar
              color: "#254336", // Använder den mörkgröna färgen för text på knappar
              "&:hover": {
                backgroundColor: "#DAD3BE", // Ljusare färg vid hover
              },
            }}
            variant="contained"
          >
            Läs mer
          </Button>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            padding: 4,
            zIndex: 2,
            textAlign: "left",
            color: "#DAD3BE", // Använder den ljusare beige färgen för text
          }}
        >
          <AnimatedBox>
            <Typography
              sx={{
                fontSize: { xs: 24, md: 40 },
                marginBottom: 2,
                letterSpacing: 2,
                color: "#DAD3BE", // Använder den ljusare beige färgen för text
              }}
            >
              Leveranser
            </Typography>
          </AnimatedBox>
          <AnimatedBox>
            <Box
              sx={{
                fontSize: { xs: 18, md: 20 },
                marginBottom: 4,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography sx={{ color: "#DAD3BE" }}>
                Hemleverans inom Stockholm
              </Typography>
              <Typography sx={{ color: "#DAD3BE" }}>
                Expressleverans samma dag
              </Typography>
              <Typography sx={{ color: "#DAD3BE" }}>
                Blomsterabonnemang för regelbunden leverans
              </Typography>
            </Box>
          </AnimatedBox>
          <Button
            sx={{
              backgroundColor: "#B7B597", // Använder den beige-gröna färgen för knappar
              color: "#254336", // Använder den mörkgröna färgen för text på knappar
              "&:hover": {
                backgroundColor: "#DAD3BE", // Ljusare färg vid hover
              },
            }}
            variant="contained"
          >
            Läs mer
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
