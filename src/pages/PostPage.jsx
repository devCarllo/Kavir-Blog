import Loader from "../helper/Loader";

import DOMPurify from "dompurify";

import { useQuery } from "@apollo/client";
import { GET_POST_INFO } from "../graphql/query";
import { useNavigate, useParams } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import CommentForm from "../components/modules/CommentForm";
import CommentsCard from "../components/modules/CommentsCard";

function PostPage() {
  const params = useParams();
  const navigate = useNavigate();

  const { loading, data, error } = useQuery(GET_POST_INFO, {
    variables: params,
  });

  if (loading) return <Loader />;

  if (error) return alert(error.message);

  const {
    post: { author, content, createdAt, title, cover },
  } = data;

  const myHtml = DOMPurify.sanitize(content.html);

  return (
    <>
      <Container maxWidth="md">
        <Grid container>
          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            my={3}
          >
            <Typography component="h1" variant="h6" color="primary">
              {title}
            </Typography>

            <ArrowBackIcon
              onClick={() => navigate(-1)}
              sx={{ cursor: "pointer" }}
            />
          </Grid>

          <img
            src={cover.url}
            alt={params.slug}
            style={{
              width: "100%",
              padding: "5px",
              margin: "10px auto",
              borderRadius: "15px",
            }}
          />

          <Grid
            item
            xs={12}
            my={3}
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Avatar
              src={author.avatar.url}
              sx={{ width: "40px", height: "40px", marginLeft: "8px" }}
            />
            <Typography
              component="p"
              variant="p"
              fontSize="0.8rem"
              color="text.secondary"
            >
              نوشته شده توسط {author.name}
            </Typography>

            <Divider
              orientation="vertical"
              variant="middle"
              sx={{ margin: "8px" }}
              flexItem
            />

            <Typography
              component="p"
              variant="p"
              fontSize="0.8rem"
              color="text.secondary"
            >
              {author.field}
            </Typography>

            <Divider
              orientation="vertical"
              variant="middle"
              sx={{ margin: "8px" }}
              flexItem
            />

            <Typography
              component="p"
              variant="p"
              fontSize="0.8rem"
              color="text.secondary"
            >
              {createdAt.slice(0, 10)}
            </Typography>
          </Grid>

          <Grid item xs={12} my={1} mb={5}>
            <Box
              component="div"
              dangerouslySetInnerHTML={{ __html: myHtml }}
            ></Box>
          </Grid>

          <CommentForm slug={params.slug} />

          <Typography component="h4" variant="p" fontWeight="bold" p={1} mt={3}>
            کامنت ها
          </Typography>

          <Grid item xs={12} my={2}>
            <CommentsCard slug={params.slug} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default PostPage;
