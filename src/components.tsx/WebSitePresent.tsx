import {
  faLeaf,
  faShoppingCart,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Typography } from "@mui/material";
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
        padding: 4,
        color: "#254336",
      }}
    >
      <video
        autoPlay
        loop
        muted
        src="https://i.imgur.com/fCfHGhd.mp4"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,

          brightness: "120%",
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          zIndex: -1,
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
            textAlign: "left",
          }}
        >
          <AnimatedBox>
            <Typography
              sx={{
                fontSize: { xs: 24, md: 40 },
                marginBottom: 2,
                letterSpacing: 2,
                fontWeight: 500,
              }}
            >
              <FontAwesomeIcon icon={faLeaf} style={{ marginRight: 8 }} />
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
                fontWeight: 500,
              }}
            >
              <Typography>Bröllopsblommor</Typography>
              <Typography>Begravningsarrangemang</Typography>
              <Typography>Fest- och eventblommor</Typography>
              <Typography>Färdiga buketter</Typography>
            </Box>
          </AnimatedBox>
          <Button
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
            Läs mer
          </Button>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            padding: 4,
            textAlign: "left",
          }}
        >
          <AnimatedBox>
            <Typography
              sx={{
                fontSize: { xs: 24, md: 40 },
                marginBottom: 2,
                letterSpacing: 2,
                fontWeight: 500,
              }}
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={{ marginRight: 8 }}
              />
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
              <Typography>Inomhusväxter</Typography>
              <Typography>Utomhusväxter</Typography>
              <Typography>Krukor och planteringskärl</Typography>
            </Box>
          </AnimatedBox>
          <Button
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
            Läs mer
          </Button>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            padding: 4,
            textAlign: "left",
          }}
        >
          <AnimatedBox>
            <Typography
              sx={{
                fontSize: { xs: 24, md: 40 },
                marginBottom: 2,
                letterSpacing: 2,
                fontWeight: 500,
              }}
            >
              <FontAwesomeIcon icon={faTruck} style={{ marginRight: 8 }} />
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
              <Typography>Hemleverans inom Stockholm</Typography>
              <Typography>Expressleverans samma dag</Typography>
              <Typography>
                Blomsterabonnemang för regelbunden leverans
              </Typography>
            </Box>
          </AnimatedBox>
          <Button
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
            Läs mer
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
