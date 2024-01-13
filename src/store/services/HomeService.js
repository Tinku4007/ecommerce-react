import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { mainurl } from "../../utils/mainUrl";

export const HomeService = createApi({
    baseQuery: fetchBaseQuery({
        // reducerPath:"api",   
        baseUrl: mainurl.HOST,
        prepareHeaders:(Headers , {getState})=>{
            try {
                const token = getState().auth.token
                if(token){
                    Headers.set('authorization', `Bearer ${token}`)
                }
            } catch (error) {
                
            }
        }
    }),
    endpoints: (builder) => ({
        homeDashboard: builder.query({
            query:()=>'/products',
        }),
        userLogin:builder.mutation({
            query:(userData)=>({
                method:'POST',
                url: '/auth/login',
                body:userData
            })
        })
    }),
    
})

export const { useHomeDashboardQuery , useUserLoginMutation } = HomeService;
export default HomeService