import { useState } from 'react';
import CardWrapper from '../../components/shared/CardWrapper';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

const AreaList = () => {
  // TODO: call endpoint to get Areas
  const [areas, setAreas] = useState<{ name: string }[]>([
    {
      name: 'Corte'
    },
    {
      name: 'Manga'
    },
    {
      name: 'Empaque'
    }
  ]);

  return (
    <CardWrapper isCenter widthCard={800}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Created by</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {areas.map((area) => (
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>{area.name}</TableCell>
                <TableCell>ADMIN</TableCell>
                <TableCell>EDIT</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CardWrapper>
  );
};

export default AreaList;
