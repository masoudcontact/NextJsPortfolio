import MainHeader from "./main-header";
import { Grid } from "theme-ui";
import { Container } from "react-bootstrap";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div>
      <MainHeader />
      <Grid sx={{ marginTop: "1rem" }}>
        <Container fluid="md" style={{ minHeight: "80vh" }}>
          <main>{props.children}</main>
        </Container>
        <Footer />
      </Grid>
    </div>
  );
};

export default Layout;
