import { Grid } from "@mui/material"
import axios from "axios"
import InfoBox from "../../components/InfoBox"

export default function Report({ healthy, infected, resources }) {
  return (
    <Grid container justifyContent={"center"} spacing={4}>
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
  )
}

export async function getServerSideProps(context) {
  const uri =
    process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_PATH_SURVIVORS
  const response = await axios.get(uri)

  if (response.data) {
    const length = response.data.length

    let healthy = 0
    let infected = 0
    let total = 0

    for (let survivor of response.data) {
      if (survivor.isInfected) {
        infected += 1
      } else {
        healthy += 1
      }
      total += survivor.inventory.length
    }

    const resources = total / length

    return {
      props: { healthy, infected, resources },
    }
  } else {
    return {
      props: { healthy: 0, infected: 0, resources: 0 },
    }
  }
}
