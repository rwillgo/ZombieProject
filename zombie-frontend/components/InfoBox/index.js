import { Box, Typography } from "@mui/material"

export default function InfoBox({
  title,
  subtitle,
  description,
}) {
  return (
    <Box
      width={350}
      borderRadius={5}
      p={2}
      sx={{ border: "1px solid grey" }}
    >
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h3" gutterBottom>
        {subtitle}
      </Typography>
      <Typography variant="body1" display="block" gutterBottom>
        {description}
      </Typography>
    </Box>
  )
}
