import Nav from "../Nav";

function Header(props) {
  return (
    <header>
      <h1>Angel Rios</h1>
      <Nav props={props}/>
    </header>
  );
}

export default Header;