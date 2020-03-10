import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SingleCurrentGame from './SingleCurrentGame';


const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});

export default function CurrentGames() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Team 1</TableCell>
            <TableCell align="right">Team 1 Score</TableCell>
            <TableCell align="right">Team 2</TableCell>
            <TableCell align="right">Team 2 Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <SingleCurrentGame />
        </TableBody>
      </Table>
    </TableContainer>
  );
}