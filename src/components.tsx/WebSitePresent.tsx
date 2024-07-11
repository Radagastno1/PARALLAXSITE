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
        background: "#F5F5DC",
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
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
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
            textAlign: "left",
            color: "#254336",
          }}
        >
          <AnimatedBox>
            <Typography
              sx={{
                fontSize: { xs: 24, md: 40 },
                marginBottom: 2,
                letterSpacing: 2,
                color: "#254336",
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
              }}
            >
              <Typography sx={{ color: "#254336" }}>Bröllopsblommor</Typography>
              <Typography sx={{ color: "#254336" }}>
                Begravningsarrangemang
              </Typography>
              <Typography sx={{ color: "#254336" }}>
                Fest- och eventblommor
              </Typography>
              <Typography sx={{ color: "#254336" }}>
                Färdiga buketter
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

        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            padding: 4,
            textAlign: "left",
            color: "#254336",
          }}
        >
          <AnimatedBox>
            <Typography
              sx={{
                fontSize: { xs: 24, md: 40 },
                marginBottom: 2,
                letterSpacing: 2,
                color: "#254336",
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
              <Typography sx={{ color: "#254336" }}>Inomhusväxter</Typography>
              <Typography sx={{ color: "#254336" }}>Utomhusväxter</Typography>
              <Typography sx={{ color: "#254336" }}>
                Krukor och planteringskärl
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

        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            padding: 4,
            textAlign: "left",
            color: "#254336",
          }}
        >
          <AnimatedBox>
            <Typography
              sx={{
                fontSize: { xs: 24, md: 40 },
                marginBottom: 2,
                letterSpacing: 2,
                color: "#254336",
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
              <Typography sx={{ color: "#254336" }}>
                Hemleverans inom Stockholm
              </Typography>
              <Typography sx={{ color: "#254336" }}>
                Expressleverans samma dag
              </Typography>
              <Typography sx={{ color: "#254336" }}>
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
