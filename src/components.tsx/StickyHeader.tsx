import { Box, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface StickyHeaderProps {
  isSticky: boolean;
}
export default function StickyHeader(props: StickyHeaderProps) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: props.isSticky ? "fixed" : "relative",
        top: props.isSticky ? 0 : "auto",
        width: "100%",
        backgroundColor: "white",
        color: "#2E8B57",
        textAlign: "center",
        padding: props.isSticky ? "10px 0" : 0,
        zIndex: props.isSticky ? 999 : 1,
        boxShadow: props.isSticky ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
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
              color: "#2E8B57",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: "bold",
              "&:hover": {
                color: "#A0C8A0",
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
              color: "#2E8B57",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: "bold",
              "&:hover": {
                color: "#A0C8A0",
              },
            }}
          >
            Om Oss
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => {
              navigate("/ourproducts");
            }}
            variant="text"
            sx={{
              color: "#2E8B57",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: "bold",
              "&:hover": {
                color: "#A0C8A0",
              },
            }}
          >
            Vårt Utbud
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="text"
            onClick={() => {
              navigate("/contact");
            }}
            sx={{
              color: "#2E8B57",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: "bold",
              "&:hover": {
                color: "#A0C8A0",
              },
            }}
          >
            Kontakt
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
