import React from "react";
import { Text, Flex,Button,Heading } from "@chakra-ui/react";
import {
	// BrowserRouter as Router,
	// Route,
	Link,
	// Switch
} from 'react-router-dom';
function Nav() {
  return (
    <Flex mb='50px' w="100%" h="60px" pl="20px" bg="rgb(18, 29, 51)" paddingLeft='1.5rem' paddingRight='1.5rem'>
      <Flex w='100%' justify='space-between'  alignContent='center' >
        <Flex>
        <Heading color="blue.300" mt='5px' fontSize="32px">
          NURI
        </Heading>
        <Flex ml="30px" pt="14px">
          {/* <Text fontSize='20px' color="white" mr="15px">
            Wallet
          </Text>
          <Text fontSize='20px' color="white" mr="15px">
            Exchange
          </Text> */}
          <Link to='/'>
          <Text fontSize='20px' color="white" mr="15px">
            Explorer
          </Text>
          </Link>
          
        </Flex>
        </Flex>
        <Flex  pt='15px'>
            <Button h='2rem' mr='10px' bg='rgb(12, 108, 242)' color='white'>Buy Bitcoin</Button>
            <Button h='2rem' bg='rgb(14, 130, 140)' color='white'>Trade</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Nav;
