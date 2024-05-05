import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function ImgMediaCard({ hospitalId, imageSrc, title, description, shareDestination }) {
  return (
    <Card sx={{ maxWidth: 345, marginTop: 4, marginBottom: 4 }}>
      <CardMedia
        component="img"
        alt="Hospital"
        height="240"
        image={imageSrc}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button size="small" href={shareDestination}>Share</Button>

        <Button size="small" component={Link} to={`/hospital_details/${hospitalId}`}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
