export default function useAddSurvivorModal({ onAddSurvivor }) {
  const onConfirmAddSurvivor = ({
    name,
    age,
    gender,
    inventory,
    isInfected,
  }) => {
    onAddSurvivor({ name, age, gender, inventory, isInfected });
  };

  return {
    onConfirmAddSurvivor,
  };
}
