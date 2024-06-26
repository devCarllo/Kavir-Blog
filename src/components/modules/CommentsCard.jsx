import Loader from "../../helper/Loader";

import { useQuery } from "@apollo/client";
import { GET_POST_COMMENTS } from "../../graphql/query";

import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";

function CommentsCard({ slug }) {
  const { loading, data, error } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });

  if (loading) return <Loader />;

  if (error) return alert(error.message);

  return (
    <>
      <Grid
        container
        spacing={2}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        width="100%"
      >
        {!data.comments.length && (
          <Typography
            component="div"
            variant="p"
            width="100%"
            textAlign="center"
            p={1}
            sx={{
              borderRadius: "8px",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            }}
          >
            اولین کامنت رو تو بنویس
          </Typography>
        )}

        {!!data.comments.length &&
          data.comments.map((item) => (
            <Grid
              key={item.id}
              item
              xs={12}
              p={1}
              mb={3}
              sx={{
                width: "100%",
                borderRadius: "8px",
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              }}
            >
              <Box
                component="div"
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box
                  component="div"
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="flex-start"
                  mb={1}
                >
                  <Avatar
                    sx={{ bgcolor: "var(--highlight)", marginLeft: "8px" }}
                  >
                    {item.name[0]}
                  </Avatar>
                  <Typography component="span">{item.name}</Typography>
                </Box>

                <Typography component="span" variant="span">
                  {item.createdAt.slice(0, 10)}
                </Typography>
              </Box>
              <Divider variant="middle" component="li" />

              <Typography component="p" variant="p" mt={2} p={1}>
                {item.text}
              </Typography>
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default CommentsCard;
