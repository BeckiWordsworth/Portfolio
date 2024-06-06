import * as React from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";

const ArticleCard = ({ title, previewImage, conference, previewText, city, date }) => {
  return (
    <Card sx={{ minHeight: 100, display: "grid", gridTemplateColumns: "120px 1fr" }}>
      <CardMedia sx={{ width: 120 }} image={"/" + previewImage} title="green iguana" />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ padding: "12px" }}>
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
