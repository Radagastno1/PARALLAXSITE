import { Box, Typography, Link } from "@mui/material";
import StickyHeader from "../components.tsx/StickyHeader";

const waveSvg = `https://i.imgur.com/sRKOmS8.png`;
const iconSvg = `data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiMyNTQzMzYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDIuMjc4bDcuMTQ1IDcuMTQ1YTIgMiAwIDAwLTIuODI4IDIuODI4TDExLjI3OCA1LjE1NiAzLjY4IDIyLjMyNkwyMC4zMjggMy42OEwxMiAxMiAwbDcuMTQ1LTcuMTQ1eiIvPjwvc3ZnPg==`;

export default function Contact() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <StickyHeader isSticky={true} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          minHeight: "100vh",
          marginTop: 7,
          position: "relative",
          overflow: "hidden",
          // backgroundColor: "#F5F5DC",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${waveSvg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
          }}
        >
          <img src={iconSvg} alt="Icon" style={{ width: 100, height: 100 }} />
        </Box>

        <Box
          sx={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            zIndex: 2,
            padding: 3,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#DAD3BE",
              borderRadius: 1,
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
              padding: 4,
              zIndex: 2,
              textAlign: "center",
              maxWidth: 600,
              width: "100%",
            }}
          >
            <Typography variant="h4" color="#254336" mb={2}>
              Kontakta oss
            </Typography>
            <Typography variant="body1" color="#254336" mb={1}>
              Telefon:{" "}
              <Link href="tel:+123456789" color="#254336">
                123-456-789
              </Link>
            </Typography>
            <Typography variant="body1" color="#254336" mb={2}>
              Email:{" "}
              <Link href="mailto:info@example.com" color="#254336">
                info@example.com
              </Link>
            </Typography>
            <Typography variant="body2" color="#254336">
              Följ oss på sociala medier för de senaste uppdateringarna och
              erbjudandena!
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            // height: 300,
            width: "100%",
            position: "absolute",
            bottom: 0,
            // backgroundColor: "#254336",
            // zIndex: 1,
          }}
        />
      </Box>
    </Box>
  );
}
