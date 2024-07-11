import { Box, Button, Grid, Typography, keyframes } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedBox = motion(Box);

export default function AboutUs() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        // background: "linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)",
        padding: 4,
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          color: "#254336",
          textAlign: "center",
          padding: "10px 0",
          zIndex: 999,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button
              variant="text"
              onClick={() => {
                navigate("/");
              }}
              sx={{
                color: "#254336",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "bold",
                "&:hover": {
                  color: "#6B8A7A",
                },
              }}
            >
              Hem
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                navigate("/about");
              }}
              variant="text"
              sx={{
                color: "#254336",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "bold",
                "&:hover": {
                  color: "#6B8A7A",
                },
              }}
            >
              Om Oss
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="text"
              onClick={() => {
                navigate("/ourflowers");
              }}
              sx={{
                color: "#254336",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "bold",
                "&:hover": {
                  color: "#6B8A7A",
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
              variant="text"
              sx={{
                color: "#254336",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "bold",
                "&:hover": {
                  color: "#6B8A7A",
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "800px",
          margin: "auto",
          padding: 4,
        }}
      >
        <AnimatedBox
          sx={{
            width: "100%",
            marginBottom: 2,
            animation: `${fadeIn} 1s ease-out`,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#254336",
              letterSpacing: 3,
              marginBottom: { xs: 2, md: 3 },
              fontWeight: "300",
              fontSize: { xs: 35, md: 50 },
              textAlign: "center",
            }}
          >
            Om Oss
          </Typography>
        </AnimatedBox>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 4,
            animation: `${fadeIn} 1s ease-out`,
            animationDelay: "0.5s",
          }}
        >
          <Box
            sx={{
              flex: 1,
              padding: 2,
              textAlign: "center",
            }}
          >
            <img
              src="https://i.imgur.com/FNo0BUN.jpeg"
              alt="Team"
              style={{
                width: "100%",
                borderRadius: 8,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              padding: 2,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#254336",
                letterSpacing: 1.5,
                fontWeight: "bold",
                marginBottom: 2,
              }}
            >
              Vi är en liten och personlig blomsterhandel med fokus på att skapa
              glädje
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                color: "#4F4F4F",
              }}
            >
              Vi har många års erfarenhet och älskar att arbeta med blommor.
              Vårt team består av kunniga och passionerade florister som alltid
              strävar efter att överträffa dina förväntningar. Oavsett om du
              behöver blommor för bröllop, begravningar, fester eller bara för
              att lysa upp din vardag, finns vi här för att hjälpa dig.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
