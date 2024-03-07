import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useHeader from "./hooks";

function Header() {
  const { buttonNames, currentIndex, paths, onClickHandler } = useHeader();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ZOMBIES
        </Typography>
        {buttonNames.map((name, index) => (
          <Button
            size="large"
            color="inherit"
            //variant={currentIndex === index ? "contained" : undefined}
            //onClick={() => onClickHandler(index)}
          >
            <Link href={paths[index]}>{name}</Link>
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
