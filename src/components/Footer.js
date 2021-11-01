import React from 'react'
import {Box,Flex, Text, } from "@chakra-ui/react";



function Footer() {
    return (
        <Flex  width='70%' mb='50px' margin='auto' justify='space-between'>
            <Box>
                <Text fontSize='20px' fontWeight='700'>Products</Text>
                <ul style={{listStyle:'none'}}>
                    <li>Wallet</li>
                    <li>Exchange</li>
                    <li>Explorer</li>
                </ul>
            </Box>
            <Box>
                <Text fontSize='20px' fontWeight='700'>Resources</Text>
                <ul style={{listStyle:'none'}}>
                    <li>APIs</li>
                    <li>Status</li>
                    <li>Open Source</li>
                </ul>
            </Box>
            <Box>
                <Text fontSize='20px' fontWeight='700'>About</Text>
                <ul style={{listStyle:'none'}}>
                    <li>Team</li>
                    <li>Careers</li>
                    <li>Press</li>
                </ul>
            </Box>
        </Flex>
    )
}

export default Footer
