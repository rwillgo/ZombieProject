import { Grid, Container } from "@mui/material";
import Box from "@mui/material/Box";
import InfoBox from "../../components/InfoBox";
import PageSectionTitle from "../../components/PageSectionTitle";
import useReport from "./hooks";
import styles from "./styles";

export default function Report() {
  const { healthy, infected, resources } = useReport();

  return (
    <Container sx={{ ...styles.container }}>
      <PageSectionTitle
        title={"Reports"}
        subtitle={"Your camp has grown 5% this month"}
      />
      <Box sx={{ ...styles.tableContainer }}>
        <Grid sx={{ ...styles.gridContainer }} container>
          <Grid item>
            <InfoBox
              title={"Number of Healthy Survivors"}
              subtitle={healthy}
              description={"Last 30 days"}
            />
          </Grid>
          <Grid item>
            <InfoBox
              title={"Number of Infected Survivors"}
              subtitle={infected}
              description={"Last 30 days"}
            />
          </Grid>
          <Grid item>
            <InfoBox
              title={"Average Resource Allocation"}
              subtitle={resources}
              description={"10 days worth"}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
