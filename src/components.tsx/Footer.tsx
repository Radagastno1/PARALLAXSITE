import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box, Divider, IconButton, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        paddingY: 6,
        textAlign: "center",
        backgroundColor: "#254336",
        zIndex: 2,
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 4,
        }}
      >
        <IconButton
          sx={{
            color: "white",
            "&:hover": {
              color: "#dbbed1",
              transition: "color 0.3s ease",
            },
          }}
          href="https://www.instagram.com/blomstergladje"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton
          sx={{
            color: "white",
            "&:hover": {
              color: "#dbbed1",
              transition: "color 0.3s ease",
            },
          }}
          href="https://www.facebook.com/blomstergladje"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton
          sx={{
            color: "white",
            "&:hover": {
              color: "#dbbed1",
              transition: "color 0.3s ease",
            },
          }}
          href="mailto:info@blomstergladje.se"
        >
          <MailOutlineIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </Box>
      <Box sx={{ color: "white", marginBottom: 4 }}>
        <Typography fontWeight={600} variant="h6">
          BlomsterGlädje AB
        </Typography>
        <Typography>Storgatan 12</Typography>
        <Typography>111 22 Stockholm</Typography>
        <Typography sx={{ marginTop: 1 }}>
          <Link
            href="mailto:info@blomstergladje.se"
            sx={{
              color: "inherit",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            info@blomstergladje.se
          </Link>
        </Typography>
      </Box>
      <Divider sx={{ backgroundColor: "white", marginY: 4 }} />
      <Box
        sx={{
          marginY: 4,
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          href="https://www.instagram.com/blomstergladje"
          sx={{
            marginRight: 2,
            color: "white",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography>INSTAGRAM</Typography>
        </Link>
        <Link
          href="https://www.facebook.com/blomstergladje"
          sx={{
            marginRight: 2,
            color: "white",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography>FACEBOOK</Typography>
        </Link>
        <Link
          href="https://www.google.com/maps/dir//Vävlagargatan+6p,+507+30+Brämhult/"
          sx={{
            color: "white",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography> HITTA</Typography>
        </Link>
      </Box>
    </Box>
  );
}
