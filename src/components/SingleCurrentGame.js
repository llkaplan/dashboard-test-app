import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function createData(name1, score1, name2, score2) {
    return { name1, score1, name2, score2 };
}
//need to replace this data with stuff from the Sports API, all current games from the sport and league that the user selects
const rows = [
    createData('Name', 12, 'Name', 8),
    createData('Name', 23, 'Name', 7),
];

export default function PastGames() {
    return (
        rows.map(row => (
            <TableRow key={row.name}>
                <TableCell align="right">{row.name1}</TableCell>
                <TableCell align="right">{row.score1}</TableCell>
                <TableCell align="right">{row.name2}</TableCell>
                <TableCell align="right">{row.score2}</TableCell>
            </TableRow>
        )
        )
    )
};