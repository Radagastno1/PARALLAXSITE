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

export default function OurProducts() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
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
        <AnimatedBox
          sx={{
            width: "100%",
            marginY: 2,
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
            Vårt utbud speglar dina behov
          </Typography>
        </AnimatedBox>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            width: "100%",
            animation: `${fadeIn} 1s ease-out`,
            animationDelay: "0.5s",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: 4,
            }}
          >
            <Box
              sx={{
                flex: 1,
                textAlign: "center",
              }}
            >
              <img
                src="https://i.imgur.com/2z3oAHn.jpeg"
                alt="Indoor Plants"
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
                Inomhusväxter
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  color: "#4F4F4F",
                }}
              >
                Utforska vårt utbud av vackra och lättskötta inomhusväxter som
                ger liv och fräschör till ditt hem. Våra växter är noggrant
                utvalda för att passa alla typer av inomhusmiljöer.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row-reverse" },
              alignItems: "center",
              gap: 4,
            }}
          >
            <Box
              sx={{
                flex: 1,
                textAlign: "center",
              }}
            >
              <img
                src="https://i.imgur.com/Zj9JwY0.jpeg"
                alt="Outdoor Plants"
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
                Utomhusväxter
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  color: "#4F4F4F",
                }}
              >
                Vårt sortiment av utomhusväxter är perfekt för att skapa en
                grönskande och inbjudande trädgård. Vi erbjuder ett brett urval
                av växter som tål det svenska klimatet och som förskönar din
                utemiljö.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: 4,
            }}
          >
            <Box
              sx={{
                flex: 1,
                textAlign: "center",
              }}
            >
              <img
                src="https://i.imgur.com/Y9h3YXb.jpeg"
                alt="Pots and Containers"
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
                Krukor och Behållare
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  color: "#4F4F4F",
                }}
              >
                Upptäck vårt sortiment av stiliga och funktionella krukor och
                behållare. Våra produkter är designade för att komplettera dina
                växter och ge dem en vacker inramning, både inomhus och utomhus.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
