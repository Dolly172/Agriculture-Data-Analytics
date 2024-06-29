import React from 'react';
import { Table } from '@mantine/core';

function TableOne({ data }) {

const rows = Object.keys(data).map((year, index) => (
    <Table.Tr key={index}>
        <Table.Td>{year}</Table.Td>
        <Table.Td>{data[year].maxCrop}</Table.Td>
        <Table.Td>{data[year].minCrop}</Table.Td>
    </Table.Tr>
    ));

  return (
    <Table striped highlightOnHover withColumnBorders stickyHeader horizontalSpacing="lg">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Year</Table.Th>
            <Table.Th>Crop with Maximum Production</Table.Th>
            <Table.Th>Crop with Minimum Production</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
  )
}

export default TableOne;