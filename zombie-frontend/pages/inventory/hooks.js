import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { getSurvivors } from "../../services/api";

export default function useInventory() {
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 200,
      disableClickEventBubbling: true,
    },
    {
      field: "inventory",
      headerName: "Inventories",
      width: 200,
      disableClickEventBubbling: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <Button
            variant="contained"
            onClick={() => onButtonClickHandler(params)}
          >
            Request Item
          </Button>
        );
      },
      disableClickEventBubbling: true,
    },
  ];
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getSurvivorsListing();
  }, []);

  const onButtonClickHandler = (params) => {
    console.log("Params - ", params.row.id);
  };

  const getSurvivorsListing = async () => {
    try {
      const response = await getSurvivors();

      if (response.data) {
        const tempRows = [];

        for (let survivor of response.data) {
          const aRow = {
            id: response.data.indexOf(survivor),
            name: survivor.name,
            inventory: survivor.isInfected ? "Infected" : "Healthy",
            action: survivor.age,
          };
          tempRows.push(aRow);
        }

        setRows(tempRows);
      }
    } catch (error) {
      //
    }
  };

  return {
    columns,
    rows,
  };
}
