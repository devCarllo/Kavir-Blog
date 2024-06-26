import { useQuery } from "@apollo/client";
import { GET_BLOG_INFO } from "../graphql/query";

import AuthorsCard from "../components/modules/AuthorsCard";
import BlogCard from "../components/modules/BlogCard";

import { Container, Grid, Typography } from "@mui/material";
import Loader from "../helper/Loader";

function HomePage() {
  const { loading, data, error } = useQuery(GET_BLOG_INFO);

  if (loading) return <Loader />;

  if (error) return alert(error.message);

  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={2} px={4} py={2}>
          <Typography component="h3" variant="span" py={1}>
            نویسندگان
          </Typography>

          <Grid item xs={12} mb={2}>
            <AuthorsCard />
          </Grid>

          <Grid item xs={12}>
            <Typography component="h3" variant="span" py={1}>
              مقاله ها
            </Typography>

            <Grid
              container
              spacing={4}
              sx={{
                display: "flex",
                flexFlow: "row, wrap",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              {data.posts.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <BlogCard data={item} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HomePage;
