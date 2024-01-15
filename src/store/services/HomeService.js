import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { mainurl } from "../../utils/mainUrl";

export const HomeService = createApi({
    baseQuery: fetchBaseQuery({
        // reducerPath:"api",   
        baseUrl: mainurl.HOST,
        prepareHeaders: (Header, { getState }) => {
            try {
                const token = getState().auth.token
                if (token) {
                    Header.set('authorization', `Bearer ${token}`)
                }
            } catch (error) {

            }
        }
    }),
    endpoints: (builder) => ({
        homeDashboard: builder.query({
            query: () => '/products',
        }),
        userLogin: builder.mutation({
            query: (userData) => ({
                method: 'POST',
                url: '/auth/login',
                body: userData
            })
        }),
        user: builder.query({
            query: () => 'users/1'
        }),
        addToCart: builder.mutation({
            query: (cartsData) => ({
                method: 'POST',
                url: `/carts/${id}`,
                body: cartsData
            })
        }),
        fetchCards: builder.query({
            query: () => `/carts`
        }),
        // productGetById: builder.query({
        //     query:()=>`/products/:${id}`
        // })
    }),
})

export const { useHomeDashboardQuery, useUserLoginMutation, useUserQuery, useAddToCartMutation, useFetchCardsQuery  } = HomeService;
export default HomeService