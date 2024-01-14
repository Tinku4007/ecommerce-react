import { Box, Drawer, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Cart = ({ cartDrawer, setCartDrawer }) => {
  const cartItems = useSelector((state) => state.cart)
  const [add, setAdd] = useState(0)
  console.log(cartItems)

  const decreament = () => {
    setAdd((prev) => prev - 1)
  }

  const increament = () => {
    setAdd((prev) => prev + 1)
  }

  return (
    <Drawer width="400px" anchor='right' open={cartDrawer} onClose={() => setCartDrawer(false)}>
      <Stack width="70vw" padding="15px" gap="15px">
        <Box display="flex" alignItems="center" gap="20px">
          <img className='w-[100px]' src={cartItems.cart?.image} alt="" />
          <Box>
            <Typography fontWeight='500'>
              {cartItems.cart?.category}
            </Typography>
            <Typography paddingTop="px" color="#ccc">
              {cartItems.cart?.title}
            </Typography>
            <Typography fontWeight="600">
              Price: {cartItems.cart?.price}
            </Typography>
          </Box>
        </Box>
        <Box display='flex' alignItems="center" gap="15px">
          <Box display="flex" alignItems="center" gap="15px">
            <Box border="1px solid #ccc" borderRadius='50%' width='30px' height='30px' display='flex' alignItems='center' justifyContent='center'>
              <RemoveIcon onClick={decreament} fontSize='10px' />
            </Box>
            <input className='border border-[#ccc] w-[50px] outline-none text-center' value={add} autoFocus={false} type="text" />
            <Box border="1px solid #ccc" borderRadius='50%' width='30px' height='30px' display='flex' alignItems='center' justifyContent='center'>
              <AddIcon onClick={increament} />
            </Box>
          </Box>
          <Typography fontWeight={600}>
            Remvove
          </Typography>
        </Box>
      </Stack>
    </Drawer>
  )
}

export default Cart