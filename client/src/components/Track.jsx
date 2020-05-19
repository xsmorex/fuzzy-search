import React, { useState, useEffect } from 'react';
import { Card, CardContent,Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 275,
      marginTop: 10,
      justifyContent: 'center',
    },
    cardContent: {},
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  
const Track = ({ track }) => {
    const classes = useStyles();
  
    return (
      <Card className={classes.root} variant="outlined">
        <CardContent className={classes.cardContent}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
           {track.id}
          </Typography>
          <Typography variant="h5" component="h2">
            {track.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {track.artist}
          </Typography>
        </CardContent>
      </Card>
    );
  }

  export default Track;
