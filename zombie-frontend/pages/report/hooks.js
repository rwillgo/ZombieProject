import { useState, useEffect } from "react";
import { getSurvivors } from "../../services/api";

export default function useReport() {
  const [healthy, setHealthy] = useState(0);
  const [infected, setInfected] = useState(0);
  const [resources, setResources] = useState(0);

  useEffect(() => {
    getSurvivorsListing();
  }, []);

  const getSurvivorsListing = async () => {
    try {
      const response = await getSurvivors();

      if (response.data) {
        const length = response.data.length;
        let tempHealthy = 0;
        let tempInfected = 0;
        let total = 0;

        for (let survivor of response.data) {
          if (survivor.isInfected) {
            tempInfected += 1;
          } else {
            tempHealthy += 1;
          }

          if (survivor.inventory) {
            total += survivor.inventory.length;
          }
        }

        setHealthy(tempHealthy);
        setInfected(tempInfected);
        setResources(total / length);
      }
    } catch (error) {
      //
    }
  };

  return {
    healthy,
    infected,
    resources,
  };
}
