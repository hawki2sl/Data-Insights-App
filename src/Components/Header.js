import classes from "./Header.module.css";
import MainNavigation from "./MainNavigation";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Header</h1>
      <MainNavigation />
    </header>
  );
};

export default Header;
