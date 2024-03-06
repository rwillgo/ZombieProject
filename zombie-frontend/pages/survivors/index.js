import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PageSectionTitle from "../../components/PageSectionTitle";
import useSurvivors from "./hooks";
import AddSurvivorModal from "../../components/AddSurvivorModal";
import styles from "./styles";

export default function Survivors() {
  const {
    healthyCount,
    rows,
    columns,
    isOpen,
    onAddSurvivorHandler,
    onConfirmAddSurvivorHandler,
    onCancelAddSurvivorHandler,
  } = useSurvivors();

  return (
    <Container sx={{ ...styles.container }}>
      <Box sx={{ ...styles.buttonContainer }}>
        <PageSectionTitle
          title={"List of Survivors"}
          subtitle={"You have " + healthyCount + " healthy survivors"}
        />
        <div>
          <Button variant="contained" onClick={onAddSurvivorHandler}>
            Add Survivor
          </Button>
        </div>
      </Box>
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
          checkboxSelection
        />
      </Box>
      <AddSurvivorModal
        open={isOpen}
        onCancel={onCancelAddSurvivorHandler}
        onAddSurvivor={onConfirmAddSurvivorHandler}
      />
    </Container>
  );
}
