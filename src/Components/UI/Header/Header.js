import classes from "../Header/Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Header</h1>
      <nav>
        <ul>
          <li>Hello!</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
