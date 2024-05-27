import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function ListCard({ previewImage, title }) {
  return (
    <div className="radio-box" style={{}}>
      <div className="radio-image">
        <img src={previewImage} alt="bild" />
      </div>
      <div className="container">
        <div className="radio-name">
          <span>{title}</span>
        </div>
        <div className="audio-control">
          {/* <audio controls>
            <source src={url} type="audio/mpeg" />
          </audio> */}
        </div>
      </div>
    </div>
  );
}
