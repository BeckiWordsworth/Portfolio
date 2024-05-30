import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ArticleCard({ title, previewImage, conference, previewText }) {
  return (
    <Card sx={{ maxWidth: 345, minHeight: 280 }}>
      <CardMedia sx={{ height: 190 }} image={"/" + previewImage} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {conference}
        </Typography>
      </CardContent>
    </Card>
  );
}
