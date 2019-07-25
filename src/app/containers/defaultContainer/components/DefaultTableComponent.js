import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

export default function SimpleTable({data}) {
  const classes = useStyles();

  const tableHeaders = [
    "Analysis Request Id",
    "Description",
    "ID",
    "Status"
  ];
  
  const tableBody = (
    <TableBody>
      {data.map((row) => (
        <TableRow>
          <TableCell>{row.analysis_request_id}</TableCell>
          <TableCell><Button onClick={()=>alert(row.id)}>{row.description}</Button></TableCell>
          <TableCell>{row.id}</TableCell>
          <TableCell>{row.status}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
  
  const tableHead = (
    <TableHead>
      <TableRow>
        {tableHeaders.map(row => (
          <TableCell key={"header_" + row}>{row}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
          {tableHead}
          {tableBody}
      </Table>
    </Paper>
  );
}
