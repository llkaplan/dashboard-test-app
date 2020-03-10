import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PastGames from '../../components/PastGames';
import CurrentGames from '../../components/CurrentGames';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <h1>
              {//Need to replace the (s) with logic that can read how many games are in current games and add "s" when needed
              }
              Current Game(s)
            </h1>
            <CurrentGames />
            <h1>
              Past Games
            </h1>
            <PastGames />
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>xs=9</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
