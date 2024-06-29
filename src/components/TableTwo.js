import React from 'react';
import { Table } from '@mantine/core';

function TableTwo({ data }){
    const rows = data.map((entry, index) => (
      <Table.Tr key={index}>
        <Table.Td>{entry.crop}</Table.Td>
        <Table.Td>{entry.averageYield.toFixed(2)}</Table.Td>
        <Table.Td>{entry.averageArea.toFixed(2)}</Table.Td>
      </Table.Tr>
    ));
  
    return (
      <Table striped highlightOnHover withColumnBorders stickyHeader horizontalSpacing="lg">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Crop</Table.Th>
            <Table.Th>Average Yield (Kg/Ha)</Table.Th>
            <Table.Th>Average Cultivation Area (Ha)</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    );
  };

  export default TableTwo;

