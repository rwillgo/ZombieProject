import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import styles from "./styles";

export default function PageSectionTitle({ title, subtitle }) {
  return (
    <Box component="section" sx={{ ...styles.container }}>
      <Grid>
        <Typography variant={"h6"}>{title}</Typography>
        <Typography>{subtitle}</Typography>
      </Grid>
    </Box>
  );
}
