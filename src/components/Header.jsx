import { Box, Button, Container, Input, Stack, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Categories from './Categories';

const Header = () => {
    return (
        <>
            <Stack gap='20px'>
                <Box bgcolor='lightblue' padding='10px' >
                    <Container>
                        <Box display='flex' alignItems='center' justifyContent='space-between'>
                            <Box display='flex' width='100%' alignItems='center' gap='15px'>
                                <Box fontSize="35px" width='140px'>
                                    Shope
                                </Box>
                                <Box verticalAlign='center' padding='0 20px' borderRadius='3px' boxShadow='0 2px 4px 0 rgba(0,0,0,.23)' flex='1' width='100%' display='flex' alignItems='center' bgcolor='#fff'>
                                    <Input placeholder='Search Product' sx={{
                                        flex: '1',
                                        width: '100%',
                                        borderBottom: '0',
                                        '&::before, &::after': {
                                            borderBottom: '0',
                                            outline: 'none',
                                            border: 'none',
                                            display: 'none'
                                        },
                                    }}
                                        type='search'
                                    />
                                    <Typography sx={{ verticalAlign: 'center', marginTop: '6px' }} >
                                        <SearchIcon width="20px" />
                                    </Typography>
                                </Box>
                                <Box bgcolor="#fff" textAlign='center' borderRadius='3px' boxShadow='0 2px 4px 0 rgba(0,0,0,.23)'>
                                    <Button sx={{ fontWeight: 700, width: '100px' }}>
                                        Login
                                    </Button>
                                </Box>
                            </Box>
                            <Box width='100px' textAlign='right' display='flex' alignItems='center' justifyContent='right' gap='8px'>
                                <ShoppingCartIcon sx={{ fill: '#fff' }} />
                                <Typography>
                                    cart
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </Box>
                <Categories />
            </Stack>
        </>
    )
}

export default Header