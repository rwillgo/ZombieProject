import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import PageSectionTitle from "../../components/PageSectionTitle";
import useInventory from "./hooks";
import styles from "./styles";

export default function Inventory() {
  const { columns, rows } = useInventory();

  return (
    <Container sx={{ ...styles.container }}>
      <PageSectionTitle
        title={"List of Survivor Inventories"}
        subtitle={"You have 10,000 inventories logged"}
      />
      <Box sx={{ ...styles.tableContainer }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          disableRowSelectionOnClick
        />
      </Box>
    </Container>
  );
}

// export async function getServerSideProps(context) {
//   const response = await getSurvivors();

//   const columns = [
//     { field: "name", headerName: "Name", width: 200 },
//     { field: "inventory", headerName: "Inventories", width: 200 },
//     { field: "action", headerName: "Action", width: 200 },
//   ];

//   if (response.data) {
//     const rows = [];

//     for (let survivor of response.data) {
//       const aRow = {
//         id: response.data.indexOf(survivor),
//         name: survivor.name,
//         inventory: survivor.isInfected ? "Infected" : "Healthy",
//         action: survivor.age,
//       };
//       rows.push(aRow);
//     }

//     return {
//       props: { columns, rows, error: null },
//     };
//   } else {
//     return {
//       props: { columns, rows: null, error: null },
//     };
//   }
// }
