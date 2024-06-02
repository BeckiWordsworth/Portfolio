import * as React from "react";
import "./style.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ArticleCard({ title, previewImage, mediumURL, previewText }) {
  return (
    <Card className="stretched-mui-card" sx={{ maxWidth: 345, minHeight: 280 }}>
      <div>
        <CardMedia sx={{ height: 190 }} image={"/" + previewImage} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {previewText}
          </Typography>
        </CardContent>
      </div>
      <CardActions>
        <Button target="_blank" href={mediumURL} size="small">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
