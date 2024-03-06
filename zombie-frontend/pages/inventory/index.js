import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Grid, Container } from "@mui/material";
import axios from "axios";
import PageSectionTitle from "../../components/PageSectionTitle";
import { getSurvivors } from "../../services/api";

export default function Inventory({ columns, rows, error }) {
  return (
    <Container
      style={{
        border: "1px solid pink",
        width: "100hw",
        height: "100vh",
      }}
    >
      <PageSectionTitle
        title={"List of Survivor Inventories"}
        subtitle={"You have 10,000 inventories logged"}
      />
      <div style={{ height: "500", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const response = await getSurvivors();

  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "inventory", headerName: "Inventories", width: 200 },
    { field: "action", headerName: "Action", width: 200 },
  ];

  if (response.data) {
    const rows = [];

    for (let survivor of response.data) {
      const aRow = {
        id: response.data.indexOf(survivor),
        name: survivor.name,
        inventory: survivor.isInfected ? "Infected" : "Healthy",
        action: survivor.age,
      };
      rows.push(aRow);
    }

    return {
      props: { columns, rows, error: null },
    };
  } else {
    return {
      props: { columns, rows: null, error: null },
    };
  }
}
