import { Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function Header(): JSX.Element {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        flexDirection: isMobile ? "column" : "row",
        zIndex: 1,
        paddingY: 1,
        // backgroundColor: "red",
      }}
      component={"header"}
    >
      <Box
        sx={{
          display: "flex",
          paddingY: 2,
          width: "100%",
          paddingX: { xs: 0, md: 3 },
          marginX: { xs: 0, md: 1 },
          alignItems: "center",
          justifyContent: "space-around",
          // width: isMobile ? "100%" : "auto",
          gap: 2,
        }}
      >
        <Link
          sx={{
            textDecoration: "none",
            transition: "color 0.3s",
            "&:hover": {
              color: "#4c9173",
            },
          }}
          href="/"
        >
          <Typography
            sx={{
              color: "white",
              letterSpacing: 2,
              fontWeight: "300",
              fontSize: isMobile ? 18 : 20,
              lineHeight: 1.5,
              transition: "color 0.3s",
              "&:hover": {
                color: "#896daf",
              },
              whiteSpace: "nowrap",
            }}
          >
            Hem
          </Typography>
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            transition: "color 0.3s",
            "&:hover": {
              color: "#4c9173",
            },
          }}
          href="/about"
        >
          <Typography
            sx={{
              color: "white",
              letterSpacing: 2,
              fontWeight: "300",
              fontSize: isMobile ? 18 : 20,
              lineHeight: 1.5,
              transition: "color 0.3s",
              "&:hover": {
                color: "#896daf",
              },
              whiteSpace: "nowrap",
            }}
          >
            Om Oss
          </Typography>
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            transition: "color 0.3s",
            "&:hover": {
              color: "#4c9173",
            },
          }}
          href="/contact"
        >
          <Typography
            sx={{
              color: "white",
              letterSpacing: 2,
              fontWeight: "300",
              fontSize: isMobile ? 18 : 20,
              lineHeight: 1.5,
              transition: "color 0.3s",
              "&:hover": {
                color: "#896daf",
              },
              whiteSpace: "nowrap",
            }}
          >
            Kontakt
          </Typography>
        </Link>
        <Link>
          <img
            src="https://i.imgur.com/IMSL19B.png"
            height="100"
            alt="logo"
          ></img>
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            transition: "color 0.3s",
            "&:hover": {
              color: "#4c9173",
            },
          }}
          href="/projects"
        >
          <Typography
            sx={{
              color: "white",
              letterSpacing: 2,
              fontWeight: "300",
              fontSize: isMobile ? 18 : 20,
              lineHeight: 1.5,
              transition: "color 0.3s",
              "&:hover": {
                color: "#896daf",
              },
              whiteSpace: "nowrap",
            }}
          >
            Projekt
          </Typography>
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            transition: "color 0.3s",
            "&:hover": {
              color: "#4c9173",
            },
          }}
          href="/offers"
        >
          <Typography
            sx={{
              color: "white",
              letterSpacing: 2,
              fontWeight: "300",
              fontSize: isMobile ? 18 : 20,
              lineHeight: 1.5,
              transition: "color 0.3s",
              "&:hover": {
                color: "#896daf",
              },
              whiteSpace: "nowrap",
            }}
          >
            Erbjudanden
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}
