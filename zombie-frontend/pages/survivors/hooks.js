import { useState, useEffect } from "react";
import { getSurvivors, createSurvivor } from "../../services/api";

export default function useSurvivors() {
  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "status", headerName: "Status", width: 200 },
    { field: "age", headerName: "Age", width: 200 },
  ];
  const [rows, setRows] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [healthyCount, setHealthyCount] = useState(0);

  useEffect(() => {
    getSurvivorsListing();
  }, []);

  const getSurvivorsListing = async () => {
    try {
      const response = await getSurvivors();

      if (response.data) {
        const tempRows = [];
        let tempCount = 0;

        for (let survivor of response.data) {
          const aRow = {
            id: response.data.indexOf(survivor),
            name: survivor.name,
            status: survivor.isInfected ? "Infected" : "Healthy",
            age: survivor.age,
          };
          tempRows.push(aRow);

          if (!survivor.isInfected) {
            tempCount += 1;
          }
        }

        setHealthyCount(tempCount);
        setRows(tempRows);
      }
    } catch (error) {
      //console.log("An error occurred - ", error.message);
    }
  };

  const onAddSurvivorHandler = () => {
    setIsOpen(true);
  };

  const onConfirmAddSurvivorHandler = async (newSurvivor) => {
    setIsOpen(false);
    try {
      const response = await createSurvivor(newSurvivor);
      //console.log("Response - ", response);
      if (response) {
        getSurvivorsListing();
      }
    } catch (error) {
      //console.log("An error occurred - ", error.response);
    }
  };

  const onCancelAddSurvivorHandler = () => {
    setIsOpen(false);
  };

  return {
    healthyCount,
    rows,
    columns,
    isOpen,
    onAddSurvivorHandler,
    onConfirmAddSurvivorHandler,
    onCancelAddSurvivorHandler,
  };
}
