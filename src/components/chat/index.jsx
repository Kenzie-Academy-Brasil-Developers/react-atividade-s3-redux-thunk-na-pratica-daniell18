import { Button, makeStyles, Paper, TextField } from "@material-ui/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";
import avatar from "./download.png";

function Chat() {
  const [txt, setTxt] = useState("");
  const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
      backgroundColor: "#6AE8FC",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    paper: {
      padding: "20px",
      backgroundColor: "#57D7EB",
    },
    avatar: {
      width: "50px",
      height: "50px",
      borderRadius: "20px",
    },
    avatarPosition: {
      display: "flex",
      justifyContent: "flex-start",
      gap: "10px",
      color: "black",
      fontWeight: "bold",
    },
    input: {
      fontSize: "9px",
    },
    send: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-end",
    },
    button: {
      width: "90px",
      fontSize: "9px",
      display: "flex",
      alignItems: "center",
      backgroundColor: "blue",
      color: "white",
      borderRadius: "20px",
      height: "30px",
      fontWeight: "bold",
      padding: "0",
    },
    txt: {
      borderRadius: "10px",

      textAlign: "initial",
      padding: "7px",
      backgroundColor: "#3490FF",
    },
  }));
  const classe = useStyles();
  const dispatch = useDispatch();
  const handleComment = () => {
    if (txt !== "" && txt) {
      dispatch(addCommentThunk(txt));
    }
  };
  const comment = useSelector((state) => state.user);

  return (
    <>
      <div className={classe.root}>
        <Paper className={classe.paper}>
          <div className={classe.avatarPosition}>
            <img className={classe.avatar} src={avatar} alt="avatar" />
            <p>{comment.name}</p>
          </div>
          <div>
            {comment.comments.map((Element, index) => (
              <div key={index}>
                <h3 className={classe.txt}>{Element}</h3>
              </div>
            ))}
          </div>
          <div className={classe.send}>
            <TextField
              className={classe.input}
              type="text"
              label="Digite aqui "
              value={txt}
              onChange={(e) => setTxt(e.target.value)}
            />
            <Button
              variant="contained"
              className={classe.button}
              onClick={() => handleComment()}
            >
              new comment
            </Button>
          </div>
        </Paper>
      </div>
    </>
  );
}
export default Chat;
