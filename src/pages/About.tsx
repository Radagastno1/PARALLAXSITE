import { Box, Typography, keyframes } from "@mui/material";
import { motion } from "framer-motion";
import StickyHeader from "../components.tsx/StickyHeader";

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
      <StickyHeader isSticky={true} />

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
            <AnimatedBox
              sx={{
                width: "100%",
                marginy: 2,
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
                BlomsterGlädje
              </Typography>
            </AnimatedBox>
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
