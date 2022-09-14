import Dropdown from "react-bootstrap/Dropdown";
import HttpGetter from "./HttpGetter";

const HttpGetterWrapper = ({ coin }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-button-dark-example1"
        variant="secondary"
        style={{ width: "100%" }}
      >
        List of Links
      </Dropdown.Toggle>
      <Dropdown.Menu variant="dark" style={{ maxWidth: "100%" }}>
        {HttpGetter(coin).map((item) => {
          return (
            <li key={item}>
              <Dropdown.Item href={item}>{item}</Dropdown.Item>
            </li>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default HttpGetterWrapper;
