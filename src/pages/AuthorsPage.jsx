import { GET_AUTHOR_INFO } from "../graphql/query";

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import DOMPurify from "dompurify";

import { Avatar, Container, Grid, Typography } from "@mui/material";
import BlogCard from "../components/modules/BlogCard";
import Loader from "../helper/Loader";

function AuthorsPage() {
  const params = useParams();
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: params,
  });

  if (loading) return <Loader />;

  if (error) return alert(error.message);

  const myHtml = DOMPurify.sanitize(data.author.description.html);

  return (
    <>
      <Container maxWidth="md">
        <Grid container mt={5} p={2}>
          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Avatar
              src={data.author.avatar.url}
              sx={{ margin: "0px auto 20px", width: "250px", height: "250px" }}
            />
            <Typography component="h3" variant="h5" my={1}>
              {data.author.name}
            </Typography>
            <Typography
              component="h4"
              variant="h6"
              color="text.secondary"
              mb={4}
            >
              {data.author.field}
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-start"
            mb={4}
          >
            <Typography
              component="p"
              variant="p"
              dangerouslySetInnerHTML={{ __html: myHtml }}
            ></Typography>
          </Grid>

          <Typography component="p" variant="p" fontWeight="bold" mb={3}>
            مقالات {data.author.name}
          </Typography>

          <Grid container spacing={4}>
            {data.author.posts.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <BlogCard data={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AuthorsPage;
