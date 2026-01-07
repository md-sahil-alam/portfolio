import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BlogCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="auto"
        image="/sahilphoto.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          blog
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          aperiam repellat ad quisquam harum quae non labore fugit nobis ipsa
          laborum nulla at reprehenderit quos dolor. Qui laborum perspiciatis
          nihil!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
