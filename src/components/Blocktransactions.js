import React from 'react'
import {Box, Heading,Flex,Text} from '@chakra-ui/react'

function Blocktransactions() {
    return (
        <Box mb='50px' w='90%' margin='auto' mt='50px'>
            <Heading>Block Transactions</Heading>

            <Flex justify='space-between' mt='30px'>
                <Flex>
                <Text color='rgb(103, 113, 133)'>Fee</Text>
                <Box ml='30px'>
                    <p>0.00000000 BTC</p>
                    <p>(0.000 sat/B - 0.000 sat/WU - 217 bytes)</p>
                    <p>(0.000 sat/vByte - 190 virtual bytes)</p>
                </Box>
                </Flex>
                <Box>
                    <Box paddingLeft='0.25rem' paddingRight='0.25rem' borderRadius='0.25rem' bg='rgb(209, 240, 219)' color='rgb(0, 135, 90)' fontWeight='600'>
                    0.00000000 BTC
                    </Box>
                    <Box mt='5px' paddingLeft='0.25rem' paddingRight='0.25rem' borderRadius='0.25rem' bg='rgb(187, 219, 252)' color='rgb(12, 108, 242)' fontWeight='600'>
                    2 Confirmations
                    </Box>
                </Box>

            </Flex>

            <Box w='100%' justify='space-between' mt='30px'>
                <Flex w='100%' >
                <Text color='rgb(103, 113, 133)'>Hash</Text>
                <Flex w='100%'  justify='space-between' ml='30px'>
                    <Text mb='20px'>4b789c4ff80fe8f2829093996d21c8c61da406f3669372ce5c6850579dfcddec</Text>
                    <Text>2021-11-01 07:20</Text> 
                </Flex>
                </Flex>
                <Flex  marginLeft='65px' >
                <Text color='rgb(0, 135, 90)' >COINBASE (Newly Generated Coins)</Text>
                <Flex w='55%' justify='space-between' ml='300px'>
                   <Box>
                   <Text>19dENFt4wVwos6xtgwStA6n8bbA57WCS58</Text>
                    <Text>OP_RETURN</Text>
                    </Box> 
                    <Box ml=''>
                    <Text>6.29338589 BTC</Text>
                    <Text>0.00000000 BTC</Text>
                    </Box>
                </Flex>
                </Flex>
               

            </Box>
        </Box>
    )
}

export default Blocktransactions
