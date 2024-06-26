import { useState } from "react";

import { POST_COMMENT } from "../../graphql/mutation";

import { useMutation } from "@apollo/client";

import { Button, Grid, TextField, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CommentForm({ slug }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [sendComment, { loading, data, error }] = useMutation(POST_COMMENT, {
    variables: {
      name: userName,
      email,
      text,
      slug,
      createdAt: new Date(),
    },
  });

  const sendHandler = () => {
    if (userName && email && text) {
      sendComment();

      setUserName("");
      setEmail("");
      setText("");
    } else {
      toast.warn("لطفا تمام فیلد ها را پر کنید", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  if (data) {
    toast.success("کامنت شما ارسال شد", {
      position: "top-center",
      autoClose: 3000,
    });
  }

  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          p={1}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          sx={{
            borderRadius: "8px",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          }}
        >
          <Typography component="p" variant="p" fontWeight="bold" mb={2}>
            فرم ارسال کامنت
          </Typography>

          <TextField
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            label="نام کاربری"
            variant="outlined"
            sx={{
              width: "100%",
              marginBottom: "16px",
            }}
          />

          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="ایمیل"
            variant="outlined"
            sx={{
              width: "100%",
              marginBottom: "16px",
            }}
          />

          <TextField
            value={text}
            onChange={(e) => setText(e.target.value)}
            label="کامنت"
            variant="outlined"
            multiline
            minRows={5}
            sx={{
              width: "100%",
              marginBottom: "16px",
            }}
          />

          {loading ? (
            <Button
              variant="contained"
              disabled
              size="large"
              sx={{ width: "100%" }}
            >
              درحال ارسال
            </Button>
          ) : (
            <Button
              onClick={sendHandler}
              variant="contained"
              size="large"
              sx={{
                width: "100%",
              }}
            >
              ارسال
            </Button>
          )}
        </Grid>
        <ToastContainer position="top-center" autoClose={3000} />
      </Grid>
    </>
  );
}

export default CommentForm;
