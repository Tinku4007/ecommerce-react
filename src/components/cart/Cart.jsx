import { Box, Drawer, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useGetCartByUserQuery } from '../../store/services/HomeService';
import { getLocalStorage, setLocalStorage } from '../../utils/LocalstorageUtils';

const Cart = ({ cartDrawer, setCartDrawer }) => {
  const [add, setAdd] = useState(Number)
  const cartItems = useSelector((state) => state.addToCart.cart)
  console.log(add)

  useEffect(() => {
    decreament()
  }, [])

  const decreament = (item) => {
    setAdd(item - 1)
  }

  const increament = (item) => {
    // // localStorage.removeItem('addtocart')
    // setAdd((prev) => prev + item?.qty)
    // // setLocalStorage('addtocart', add)
  }

  return (
    <Drawer width="400px" anchor='right' open={cartDrawer} onClose={() => setCartDrawer(false)}>
      <Stack width="70vw" padding="15px" gap="15px">

        {cartItems?.map((item) => (
          <Box key={item?.id}>
            <Box display="flex" alignItems="center" gap="20px">
              <img className='w-[100px]' src={item?.thumbnail} alt="" />
              <Box>
                <Typography fontWeight='500'>
                  {item?.brand}
                </Typography>
                <Typography paddingTop="px" color="#ccc">
                  {item?.title}
                </Typography>
                <Typography fontWeight="600">
                  Price: {item?.price}
                </Typography>
              </Box>
            </Box>

            <Box display='flex' alignItems="center" gap="15px">
              <Box display="flex" alignItems="center" gap="15px">
                <Box border="1px solid #ccc" borderRadius='50%' width='30px' height='30px' display='flex' alignItems='center' justifyContent='center'>
                  <RemoveIcon onClick={() => setAdd(item?.qty)} fontSize='10px' />
                </Box>
                <input className='border border-[#ccc] w-[50px] outline-none text-center' type="text" readOnly value={item?.qty} autoFocus={false} />
                <Box border="1px solid #ccc" borderRadius='50%' width='30px' height='30px' display='flex' alignItems='center' justifyContent='center'>
                  <AddIcon onClick={() => increament(item)} />
                </Box>
              </Box>
              <Typography fontWeight={600}>
                Remvove
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Drawer>
  )
}

export default Cart