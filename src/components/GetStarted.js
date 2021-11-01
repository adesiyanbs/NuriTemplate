import React from 'react'
import {Box,Flex, Heading,Button } from "@chakra-ui/react";

function GetStarted() {
    return (
        <Box mt='50px' mb='50px' w='100%' paddingTop='50px' bg="rgb(18, 29, 51)" h='200px'>
            <Flex justify='space-between' w='90%' margin='auto'>
                <Box color='white'>
                    <Heading>You've thought about it, now it's time.</Heading>
                    <p>Create a wallet.</p>
                </Box>
                <Button pl='30px' pr='30px' color='white' h='60px' bg='rgb(12, 108, 242)'>Get Started</Button>
            </Flex>
        </Box>
    )
}

export default GetStarted
