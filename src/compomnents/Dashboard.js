import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader title='Latest Products In Our Shop' />
      <CardContent>I Will Add some data here...</CardContent>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image='/ps4.jpg'
            title='New PS4'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              The New PS4 Bundle
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              The most advanced PlayStation system ever. PS4 Pro is designed to
              take your favorite PS4 games and add to them with more power for
              graphics, performance, or features for your 4K HDR TV, or 1080p HD
              TV. Ready to level up?
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Share
          </Button>
          <Button size='small' color='primary'>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Card>
  );
};

export default Dashboard;
