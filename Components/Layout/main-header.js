/** @jsxImportSource theme-ui */
import { useState } from "react";
import Link from "next/link";
import { useColorMode, Grid, Box, Flex } from "theme-ui";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import linkedin from "../../public/Images/Social/linkedin.svg";
import Github from "../../public/Images/Social/github.svg";
import sandbox from "../../public/Images/Social/sandbox.svg";
import Emails from "../../public/Images/Social/email.svg";
import Image from "next/image";

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();
  const [Dark, setDark] = useState(false);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container fluid="md">
        <Navbar.Brand href="/">Masoud Naji</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="features">Features</Nav.Link>

            <NavDropdown title="About" id="collasible-nav-dropdown">
              <Flex
                sx={{ flexDirection: "column", alignItems: "center", gap: "2" }}
              >
                <Link href="/About" passHref>
                  <NavDropdown.Item>About</NavDropdown.Item>
                </Link>

                <a
                  href="https://onedrive.live.com/download?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397104&authkey=AA1uxVivZIR3duU&em=2"
                  download=""
                >
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    style={{ width: "7rem" }}
                  >
                    Pdf Resume
                  </Button>
                </a>

                <a
                  href="https://onedrive.live.com/download?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397100&authkey=ABpz3ESHdwNSzEQ&em=2"
                  download=""
                >
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    style={{ width: "7rem" }}
                  >
                    Doc Resume
                  </Button>
                </a>
              </Flex>
              <NavDropdown.Divider />

              <NavDropdown.Item
                as="li"
                href="mailto:info@masoudnaji.com?subject=Mail From WebSite&body=..."
              >
                <Grid gap={4} columns={[2, "1fr 2fr"]}>
                  <Box>
                    <a
                      href="mailto:info@masoudnaji.com?subject=Mail From WebSite&body=..."
                      style={{ width: "100%", display: "block" }}
                    >
                      Email
                    </a>
                  </Box>
                  <Box>
                    <section style={{ height: "2rem", width: "2rem" }}>
                      <Image src={Emails} width="100" height="100" />
                    </section>
                  </Box>
                </Grid>
              </NavDropdown.Item>

              <NavDropdown.Item
                as="li"
                href="https://www.linkedin.com/in/masoud-naji/"
              >
                <Grid gap={4} columns={[2, "1fr 2fr"]}>
                  <Box>
                    <a
                      href="https://www.linkedin.com/in/masoud-naji/"
                      style={{ width: "100%", display: "block" }}
                    >
                      Linkedin
                    </a>
                  </Box>
                  <Box>
                    <section style={{ height: "2rem", width: "2rem" }}>
                      <Image
                        src={linkedin}
                        width="100"
                        height="100"
                        alt="linkedin"
                      />
                    </section>
                  </Box>
                </Grid>
              </NavDropdown.Item>

              <NavDropdown.Item as="li" href="https://github.com/masoud-naji">
                <Grid gap={4} columns={[2, "1fr 2fr"]}>
                  <Box>
                    <a
                      href="https://github.com/masoud-naji"
                      style={{ width: "100%", display: "block" }}
                    >
                      Github
                    </a>
                  </Box>
                  <Box>
                    <section style={{ height: "2rem", width: "2rem" }}>
                      <Image
                        src={Github}
                        width="100"
                        height="100"
                        alt="Github"
                      />
                    </section>
                  </Box>
                </Grid>
              </NavDropdown.Item>

              <NavDropdown.Item
                as="li"
                href="https://codesandbox.io/u/masoud-naji"
              >
                <Grid gap={4} columns={[2, "1fr 2fr"]}>
                  <Box>
                    <a
                      href="https://codesandbox.io/u/masoud-naji"
                      style={{ width: "100%", display: "block" }}
                    >
                      sandbox
                    </a>
                  </Box>
                  <Box>
                    <section style={{ height: "2rem", width: "2rem" }}>
                      <Image
                        src={sandbox}
                        style={{ width: "2rem", height: "100%", padding: "0" }}
                        alt="sandbox"
                      />
                    </section>
                  </Box>
                </Grid>
              </NavDropdown.Item>
            </NavDropdown>

            {/* --------------------------------Projects-------------------------------- */}
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <Link href="/crypto" passHref>
                <NavDropdown.Item>Crypto Currency</NavDropdown.Item>
              </Link>
              <Link href="/crypto/bitcoin" passHref>
                <NavDropdown.Item>- Details Coin</NavDropdown.Item>
              </Link>
              <Link href="/crypto/Compare" passHref>
                <NavDropdown.Item>- Compare Coins</NavDropdown.Item>
              </Link>
              <Link href="/crypto/CryptoFacts" passHref>
                <NavDropdown.Item>- Crypto Fun Facts</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link href="/Regex/Regextest" passHref>
                <NavDropdown.Item>Regex Test</NavDropdown.Item>
              </Link>
              <Link href="/Editors/Twittespl" passHref>
                <NavDropdown.Item>Twitte Splitter</NavDropdown.Item>
              </Link>
              <Link href="/Editors/DocumentView" passHref>
                <NavDropdown.Item>Document Viewer</NavDropdown.Item>
              </Link>
              <Link href="/Editors/CompareText" passHref>
                <NavDropdown.Item>Compare Text</NavDropdown.Item>
              </Link>
              <Link href="/Editors/CompareImage" passHref>
                <NavDropdown.Item>Compare Image</NavDropdown.Item>
              </Link>
              {/* <Link href="/Editors/ReadMD" passHref>
                <NavDropdown.Item>README.me Creator</NavDropdown.Item>
              </Link> */}
              <NavDropdown.Divider />
              <Link href="/Other_projects" passHref>
                <NavDropdown.Item>Other Projects</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>

            <Button
              variant={Dark ? "outline-secondary" : "outline-danger"}
              size="sm"
              // style={{height: "2rem"}}
              onClick={() => {
                setColorMode(colorMode === "light" ? "dark" : "light"),
                  setDark(!Dark);
              }}
            >
              {Dark ? "Dark" : "Light"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
