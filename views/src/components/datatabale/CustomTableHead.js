import * as React from 'react';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';

const headCells = [
    {
      id: ' pdb_id',
      numeric: false,
      disablePadding: true,
      label: 'PDB code',
    },
    {
      id: 'date',
      numeric: true,
      disablePadding: false,
      label: 'Date',
    },
    {
      id: 'exp_method',
      numeric: true,
      disablePadding: false,
      label: 'Method',
    },
    {
      id: 'resolution',
      numeric: true,
      disablePadding: false,
      label: 'Resolution',
    },
    {
      id: 'protein',
      numeric: true,
      disablePadding: false,
      label: 'Sequence Length',
    },
  ];

export default function CustomTableHead({ createSortHandler,orderBy, order }) {
  return (
    <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
  )
}
