import { useState } from "react";

export default function useHeader() {
  const buttonNames = ["REPORT", "SURVIVORS", "INVENTORY"];
  const paths = ["/report", "/survivors", "/inventory"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const onClickHandler = (index) => {
    setCurrentIndex(index);
  };

  return { buttonNames, currentIndex, paths, onClickHandler };
}
