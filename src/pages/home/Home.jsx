import React, { useState } from 'react';
import { useHomeDashboardQuery } from '../../store/services/HomeService';
import { Box, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setCart } from '../../store/slice/HomeSlice';

const Home = () => {
  const { data } = useHomeDashboardQuery();
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(setCart((prev) => prev + item))
  }

  return (
    <>
      <Box display="flex" flexWrap="wrap" gap="15px" justifyContent="space-between">
        {data?.map((item) => (
          <Box key={item?.id} width="32%" padding="15px" border="1px solid #ccc" borderRadius="10px">
            <Box display="flex" flexDirection="column" gap="15px">
              <Box width="100%">
                <img className='h-[300px] object-contain w-full' src={item?.image} alt="" />
              </Box>
              <Box>
                <p>{item?.category}</p>
                <Typography>
                  price:{item?.price}
                </Typography>
                <Box marginTop="15px" display="flex" alignItems='center' justifyContent="space-between">
                  <Button variant='outlined'>
                    Buy
                  </Button>
                  <Button variant='outlined' onClick={() => addToCart(item)}>
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
