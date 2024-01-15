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
        categories: builder.query({
            query: () => '/products/categories'
        }),
        addCart: builder.mutation({
            query: (cart) => ({
                method: 'POST',
                url: '/carts/add',
                body: cart
            })
        }),
        getCartByUser: builder.query({
            // query: (id) => `/carts/user/${id}`
            query: (id) => `/carts/user/5`
        }),
    }),
})

export const {
    useHomeDashboardQuery,
    useCategoriesQuery,
    useUserLoginMutation,
    useAddCartMutation,
    useGetCartByUserQuery
} = HomeService;
export default HomeService