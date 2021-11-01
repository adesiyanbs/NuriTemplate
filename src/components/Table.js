import React from 'react'
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react"
  import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';

function DTable() {
    return (
        <Box pt='50px' w='90%' margin='auto'>
            <Table variant="simple">
  
  <Thead>
    <Tr>
      <Th>Height</Th>
      <Th>Hash</Th>
      <Th>Mined</Th>
      <Th>Miner</Th>
      <Th>Size</Th>
      
    </Tr>
  </Thead>
  <Tbody>
  
    <Tr>
      <Td>
        <Link to='/single'>99999</Link>
      </Td>
      <Td>0..b13c9c57f7aed4244b43b9d04555de293c5f1c9e5ebaf</Td>
      <Td >19 Minutes</Td>
      <Td >Unknown</Td>
      <Td>838,3939 bytes</Td>
    </Tr>
  
    

    <Tr>
      <Td>707823</Td>
      <Td>0..b13c9c57f7aed4244b43b9d04555de293c5f1c9e5ebaf</Td>
      <Td >19 Minutes</Td>
      <Td >Unknown</Td>
      <Td>838,3939 bytes</Td>
    </Tr>

    <Tr>
      <Td>707823</Td>
      <Td>0..b13c9c57f7aed4244b43b9d04555de293c5f1c9e5ebaf</Td>
      <Td >19 Minutes</Td>
      <Td >Unknown</Td>
      <Td>838,3939 bytes</Td>
    </Tr>
   
    
  </Tbody>
  
</Table>
            
        </Box>
    )
}

export default DTable
