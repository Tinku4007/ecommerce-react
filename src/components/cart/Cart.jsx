import { Box, Drawer } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Cart = ({ cartDrawer, setCartDrawer }) => {
  const cartItems = useSelector((state) => state.cart)

  console.log(cartItems)

  return (
    <Drawer width="400px" anchor='right' open={cartDrawer} onClose={() => setCartDrawer(false)}>
      <Box width="70vw">

      </Box>
    </Drawer>
  )
}

export default Cart