import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function MediaCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex',height:200,width:300 ,marginLeft:10,
    marginTop:5,backgroundColor:' rgb(7, 1, 19)',color:'wheat'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Treanding Orders
          </Typography>
          <Typography variant="subtitle1" color="white" component="div">
            Maize
          </Typography>
          <Typography variant="subtitle1" color="white" component="div">
            <h1 className='text-green-900 font-mono text-lg mt-8 font-bold'>Ksh. 900,567.02</h1>
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 60,height:60,marginTop:8,borderRadius:30 }}
        image="src/assets/maize.png"
        alt="maize picture"
      />
    </Card>
  );
}