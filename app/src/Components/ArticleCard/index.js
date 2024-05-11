import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ArticleCard({ title, previewImage, mediumURL, previewText }) {
  console.log(mediumURL);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={previewImage} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {previewText}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={mediumURL} size="small">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
