import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/base/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import useAddSurvivorModal from "./hooks";
import { useForm, Controller } from "react-hook-form";
import styles from "./styles";

export default function AddSurvivorModal({ open, onCancel, onAddSurvivor }) {
  const { handleSubmit, reset, register, errors, control } = useForm({
    defaultValues: {
      gender: "",
      isInfected: "",
    },
  });

  const { onConfirmAddSurvivor } = useAddSurvivorModal({ onAddSurvivor });

  return (
    <div>
      <Modal open={open}>
        <Box sx={{ ...styles }}>
          <FormControl defaultValue="" required>
            <FormGroup>
              <FormLabel
                sx={{
                  pt: 2,
                }}
              >
                Name
              </FormLabel>
              <TextField
                placeholder="John Doe"
                {...register("name", { required: true })}
              />
              <FormLabel
                sx={{
                  pt: 2,
                }}
              >
                Age
              </FormLabel>
              <TextField
                placeholder="Your age here"
                {...register("age", { required: true })}
              />
              <FormLabel
                sx={{
                  pt: 2,
                }}
              >
                Gender
              </FormLabel>
              <Controller
                rules={{ required: true }}
                control={control}
                name="gender"
                render={({ field }) => (
                  <RadioGroup {...field} row>
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                )}
              />
              <FormLabel
                sx={{
                  pt: 2,
                }}
              >
                Inventory
              </FormLabel>
              <TextField
                placeholder="Your inventory here"
                {...register("inventory", { required: true })}
              />
              <FormLabel
                sx={{
                  pt: 2,
                }}
              >
                Is survivor infected?
              </FormLabel>
              <Controller
                rules={{ required: true }}
                control={control}
                name="isInfected"
                render={({ field }) => (
                  <RadioGroup {...field} row>
                    <FormControlLabel
                      value="true"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                )}
              />
            </FormGroup>
            <Box
              component="section"
              sx={{
                pt: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button
                variant={"outlined"}
                onClick={() => {
                  reset();
                  onCancel();
                }}
              >
                Cancel
              </Button>
              <Button
                variant={"contained"}
                onClick={handleSubmit(onConfirmAddSurvivor)}
              >
                Add Survivor
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}
