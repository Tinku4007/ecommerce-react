import { Box, Button, Container, Input, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Categories from './Categories';
import Cart from './cart/Cart';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { clearLocalStorage } from '../utils/LocalstorageUtils';

const Header = () => {
    const navigate = useNavigate()
    const [cartDrawer, setCartDrawer] = useState(false)
    const data = useSelector((state) => state.auth.user)

    
    const Logout = ()=>{
        clearLocalStorage('accessToken')
        clearLocalStorage('user')
        navigate('/')
    }

    return (
        <>
            <Stack gap='20px'>
                <Box bgcolor='lightblue' padding='10px' >
                    <Container>
                        <Box display='flex' alignItems='center' justifyContent='space-between'>
                            <Box display='flex' width='100%' alignItems='center' gap='15px'>
                                <Box fontSize="35px" width='140px'>
                                    <Link to='/'>Shope</Link>
                                </Box>
                                <Box verticalAlign='center' padding='0 20px' borderRadius='3px' boxShadow='0 2px 4px 0 rgba(0,0,0,.23)' flex='1' width='100%' display='flex' alignItems='center' bgcolor='#fff'>
                                    <Input placeholder='Search Product' sx={{
                                        flex: '1',
                                        padding: "6px 0",
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
                                       {data ? <Link onClick={Logout}>Logout</Link> :  <Link to='/auth/login'>Login</Link> }
                                    </Button>
                                </Box>
                            </Box>
                            <Box sx={{ cursor: "pointer" }} onClick={() => setCartDrawer(true)} width='100px' textAlign='right' display='flex' alignItems='center' justifyContent='right' gap='8px'>
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
            <Cart cartDrawer={cartDrawer} setCartDrawer={setCartDrawer} />
        </>
    )
}

export default Header