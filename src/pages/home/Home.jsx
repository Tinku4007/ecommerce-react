import React, { useEffect, useState } from 'react';
import { useAddToCartMutation, useHomeDashboardQuery } from '../../store/services/HomeService';
import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const { data: Allproduct } = useHomeDashboardQuery();
  const dispatch = useDispatch();
  const [cart] = useAddToCartMutation();
  const getUserid = useSelector((state) => state.auth.user?.id)
  const [userId, setUserId] = useState()



  const addToCart = async (item) => {
    setUserId(getUserid)
    let id = item.id
    const cartDataa = {
      userId: userId,
      date: '2020-02-03', // Update this with the desired date format
      products: [{ productId: id, quantity: 1 }]
    };
    try {
      const { data, error } = await cart(cartDataa, { id })
      if (error) {
        console.log(error, 'fatching cart error')
      } else {
        alert("success")
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <Box display="flex" flexWrap="wrap" gap="15px" justifyContent="space-between">
        {Allproduct?.map((item) => (
          <Box key={item?.id} width="32%" padding="15px" border="1px solid #ccc" borderRadius="10px">
            <Box display="flex" flexDirection="column" gap="15px">
              <Box width="100%">
                <img className='h-[300px] object-contain w-full' src={item?.image} alt="" />
              </Box>
              <Box>
                <p>{item?.category}</p>
                <Typography variant='body1'>
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
