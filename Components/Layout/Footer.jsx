/** @jsxImportSource theme-ui */
import Link from "next/link";
import Image from "next/image";
import emailIcon from "../../public/Images/Social/email.svg";
import githubIcon from "../../public/Images/Social/github.svg";
import linkedinIcon from "../../public/Images/Social/linkedin.svg";
import sandboxIcon from "../../public/Images/Social/sandbox.svg";
import NextJsLogo from "../../public/Images/Nextjs-logo.png";

const Footer = () => {
  return (
    <footer
      sx={{
        fontSize: 1,
        variant: "styles.footer",
        bottom: 0,
        color: "text",
      }}
    >
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          maxWidth: 768,
          mx: "auto",
          px: 2,
          py: 4,
          gap: 2,
        }}
      >
        <div
          as="li"
          href="mailto:info@masoudnaji.com?subject=Mail From WebSite&body=..."
        >
          <a
            href="mailto:info@masoudnaji.com?subject=Mail From WebSite&body=..."
            style={{ width: "100%", display: "block" }}
          >
            <section style={{ height: "2rem", width: "2rem" }}>
              <Image src={emailIcon} width="100" height="100" />
            </section>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/masoud-naji/"
            style={{ width: "100%", display: "block" }}
          >
            <section style={{ height: "2rem", width: "2rem" }}>
              <Image src={linkedinIcon} width="100" height="100" />
            </section>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/masoud-naji"
            style={{ width: "100%", display: "block" }}
          >
            <section style={{ height: "2rem", width: "2rem" }}>
              <Image src={githubIcon} width="100" height="100" />
            </section>
          </a>
        </div>
        <div>
          <a
            href="https://codesandbox.io/u/masoud-naji"
            style={{ width: "100%", display: "block" }}
          >
            <section style={{ height: "2rem", width: "2rem" }}>
              <Image src={sandboxIcon} width="100" height="100" />
            </section>
          </a>
        </div>
        <div sx={{ mx: "auto" }} />
        Powered by <Image src={NextJsLogo} width="100" height="40" />
        <div sx={{ p: 2 }}>
          © {new Date(Date.now()).getFullYear()} Masoud Naji
        </div>
      </div>
    </footer>
  );
};

export default Footer;
