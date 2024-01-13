import { Container, Stack } from '@mui/material'
import React from 'react'

const Layout = ({ children }) => {
    return (
        <>
            <Stack bgcolor="#fff" padding="40px" marginTop="25px">
                <Container className='container'>
                    {children}
                </Container>
            </Stack>
        </>
    )
}

export default Layout;