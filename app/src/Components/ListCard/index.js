import * as React from "react";
import "./style.css";
import { Box, Card, CardMedia, Typography } from "@mui/material";

const ArticleCard = ({ id, title, previewImage, conference, city, date }) => {
  return (
    <Card
      className="project-previews"
      sx={{
        display: "grid",
        gridTemplateColumns: "12px 1fr",
      }}
      onClick={() => {
        window.location.href = "/talks/" + id;
      }}
    >
      <CardMedia sx={{ width: 150 }} image={"/" + previewImage} title="green iguana" />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ padding: "12px 5px 0px 150px" }}>
          <Typography gutterBottom variant="b" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {conference}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {city}, {date}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default ArticleCard;
