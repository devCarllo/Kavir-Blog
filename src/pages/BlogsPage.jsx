import { GET_BLOG_INFO } from "../graphql/query";
import { useQuery } from "@apollo/client";
import Loader from "../helper/Loader";
import { Container, Grid, Typography } from "@mui/material";
import BlogCard from "../components/modules/BlogCard";

function BlogsPage() {
  const { loading, data, error } = useQuery(GET_BLOG_INFO);

  if (loading) return <Loader />;

  if (error) return alert(error.message);

  return (
    <>
      <Container maxWidth="md">
        <Typography component="h4" variant="p" mt={4} mb={1} p={1}>
          تمامی مقالات
        </Typography>
        <Grid container spacing={2}>
          {data.posts.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id} my={1}>
              <BlogCard data={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default BlogsPage;
