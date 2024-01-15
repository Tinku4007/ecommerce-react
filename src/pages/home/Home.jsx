import React, { useEffect, useState } from 'react';
import { useAddCartMutation, useHomeDashboardQuery } from '../../store/services/HomeService';
import { Box, Button, Rating, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../../store/slice/HomeSlice';
import { getLocalStorage } from '../../utils/LocalstorageUtils';

const Home = () => {
  const { data: Allproduct } = useHomeDashboardQuery();
  const [cart] = useAddCartMutation()
  const dispatch = useDispatch()

  const handleCart = async (item) => {
    const userid = getLocalStorage("user")
    const id = userid?.id
    const cardDetails = {
      userId: id,
      products: [{ id: item?.id, quantity: 1, }]
    }

    const { data, error } = await cart(cardDetails)
    if (error) {
      console.log(error)
    } else {
      alert('success')
    }

    dispatch(setCart(data))

  }

  return (
    <>
      <Box display="flex" flexWrap="wrap" gap="15px" justifyContent="space-between">
        {Allproduct?.products?.map((item) => (
          <Box key={item?.id} width="32%" border="1px solid #ccc" borderRadius="10px">
            <Box display="flex" flexDirection="column" gap="15px">
              <Box width="100%">
                <img className='h-[194px] object-fill w-full rounded-t-[10px]' src={item?.thumbnail} alt="" />
              </Box>
              <Box paddingX="15px" paddingBottom="20px" fontWeight='600'>
                <p>{item?.title}</p>
                <Typography>
                  Shipping in 3-4 days
                </Typography>
                <Stack spacing={1}>
                  <Rating name="half-rating-read" defaultValue={item?.rating} precision={0.5} readOnly disabled />
                </Stack>
                <Typography variant='body1'>
                  price:{item?.price}
                </Typography>
                <Box marginTop="15px" display="flex" alignItems='center' justifyContent="space-between">
                  <Button variant='outlined'>
                    Buy
                  </Button>
                  <Button variant='outlined' onClick={() => handleCart(item)}>
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Home;
