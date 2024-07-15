import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/query";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function AuthorsCard() {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);

  if (error) return alert(error.message);

  return (
    <>
      {!loading && (
        <Grid container spacing={1}>
          {data.authors.map((item, index) => (
            <Link to={`/authors/${item.slug}`} key={item.id}>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  flexFlow: "row nowrap",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "3px",
                }}
              >
                <Avatar
                  src={item.avatar.url}
                  alt={item.name}
                  sx={{ marginLeft: "2px", marginRight: "4px" }}
                />
                <Typography component="p" variant="p" p={1} color="primary">
                  {item.name}
                </Typography>
                {index !== data.authors.length - 1 && (
                  <Divider orientation="vertical" variant="middle" flexItem />
                )}
              </Grid>
            </Link>
          ))}
        </Grid>
      )}
    </>
  );
}

export default AuthorsCard;
