import { AppBar, Container, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <AppBar position="static">
          <Container maxWidth="md">
            <Toolbar>
              <Typography
                variant="h5"
                fontWeight="bold"
                component="span"
                flex="1"
              >
                کویر بلاگ
              </Typography>

              <Link to="/blogs">
                <Button variant="outlined" color="secondary">
                  مقاله ها
                </Button>
              </Link>
            </Toolbar>
          </Container>
        </AppBar>
      </header>
      {children}
      <footer>
        <Container
          maxWidth="md"
          style={{ backgroundColor: "#263238" }}
          sx={{ marginTop: "32px" }}
        >
          <Typography
            variant="h6"
            component="p"
            color="secondary"
            p={2}
            textAlign="center"
          >
            ساخته شده با ❤️ توسط{" "}
            <a
              className="linkTag"
              href="https://github.com/devCarllo"
              target="_blank"
            >
              DevCarlo
            </a>
          </Typography>
        </Container>
      </footer>
    </>
  );
};

export default Layout;
