import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function InfoBox({ title, subtitle, description }) {
  return (
    <div style={{ width: "100%" }}>
      <Card sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography variant="h6" color="black" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h4" gutterBottom>
            {subtitle}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="black">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Download Report</Button>
        </CardActions>
      </Card>
    </div>
  );
}
