import {
  Avatar,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { CustomCard } from "../../mui/theme";
import { Link } from "react-router-dom";

function BlogCard({ data: { title, author, cover, slug, createdAt } }) {
  return (
    <>
      <CustomCard
        sx={{
          bgcolor: "#f1f1f1",
          borderRadius: "8px",
          width: "100%",
          flex: 1,
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        }}
      >
        {author && (
          <CardHeader
            sx={{ padding: "8px 4px 2px" }}
            avatar={
              <Avatar
                src={author.avatar.url}
                sx={{ marginLeft: "16px" }}
              ></Avatar>
            }
            title={<Typography color="primary">{author.name}</Typography>}
            subheader={
              <Typography
                component="span"
                variant="span"
                color={blueGrey[500]}
                py={1}
                fontSize="0.8rem"
              >
                {createdAt.slice(0, 10)}
              </Typography>
            }
          />
        )}

        <CardMedia component="img" height={200} image={cover.url} alt={title} />

        <CardContent>
          <Typography color="primary" textAlign="center">
            {title}
          </Typography>
        </CardContent>

        <Divider
          variant="middle"
          sx={{ marginBottom: "10px", bgcolor: blueGrey[400] }}
        />

        <CardActions>
          <Link to={`/blogs/${slug}`} style={{ width: "100%" }}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ width: "100%" }}
            >
              مطالعه
            </Button>
          </Link>
        </CardActions>
      </CustomCard>
    </>
  );
}

export default BlogCard;
