import React from "react";
import { Select, Flex,Input,Box,Heading } from "@chakra-ui/react";

function Header() {
  return (
    <Box mb='50px'  width='90%' margin='auto'>
        <Flex justify='space-between'>
      <Select w='200px'  outline="none">
        <option value="option1">Bitcoin Explorer</option>
        <option value="option1">Ethereum Explorer</option>
        <option value="option1">Bitcoin Cash Explorer</option>
        
      </Select>
     <Flex>
     <Select mr='10px' border="1px solid black" width='100px' outline="none" >
        <option value="option1">USD</option>
        <option value="option2">NGN</option>
        <option value="option3">EUR</option>
      </Select>
      <Input w='300px' placeholder="Search" />
     </Flex>
      
    </Flex>
    <Heading>Block</Heading>
    </Box>
  );
}

export default Header;
