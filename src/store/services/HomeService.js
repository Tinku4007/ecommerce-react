import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { mainurl } from "../../utils/mainUrl";

export const HomeService = createApi({
    baseQuery: fetchBaseQuery({
        // reducerPath:"api",   
        baseUrl: mainurl.HOST,
        prepareHeaders: (Header, { getState , endpoint, extra, type, forced}) => {
            try {
                const token = getState().auth.token
                if (token) {
                    Header.set('authorization', `Bearer ${token}`)
                }
            } catch (error) {
                console.log(error)
            }
        }
    }),
    tagTypes:['home' , 'login'],
    endpoints: (builder) => ({
        homeDashboard: builder.query({
            query: () => '/products',
            providesTags:['home']
        }),
        userLogin: builder.mutation({
            query: (userData) => ({
                method: 'POST',
                url: '/auth/login',
                body: userData,
            }),
            invalidatesTags:['login']
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
        getUsers: builder.query({
            query: (params) => {
                const queryParams = new URLSearchParams();
                if (params) {
                    queryParams.append("q", params);
                }
                const queryString = queryParams.toString();
                return `${'/products/search'}?${queryString}`;
            },
            providesTags: ["home"],
        }),
        // getUsers: builder.query({
        //     query: (search) => { // Receive search directly
        //         const queryParams = new URLSearchParams();
        //         if (search) { // Check if search exists
        //             queryParams.append("q", search); // Append search as 'q'
        //         }
        //         const queryString = queryParams.toString();
        //         console.log(queryParams , 'ddddddddddddddd')
        //         return `${'/products/search'}?${queryString}`; // Adjust the URL format
        //     },
        //     providesTags: ["User"],
        // }),
    }),
})

export const {
    useHomeDashboardQuery,
    useCategoriesQuery,
    useUserLoginMutation,
    useAddCartMutation,
    useGetCartByUserQuery,
    useGetUsersQuery
} = HomeService;
export default HomeService






// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { Constants } from "constants/index";

// const baseQuery = fetchBaseQuery({
//   baseUrl: Constants.HOST + Constants.API_VERSION,
//   prepareHeaders: (
//     headers,
//     { getState, endpoint, extra, type, forced } // Removed type annotations
//   ) => {
//     const token = getState().auth.token;
//     if (token && endpoint !== "getRefresh") {
//       headers.set("x-access-token", `${token}`);
//     }
//     return headers;
//   },
//   timeout: 40000,
// });

// const baseQueryInterceptor = async (args, api, options) => {
//   let result = await baseQuery(args, api, options);
//   return result;
// };

// export const baseApi = createApi({
//   reducerPath: "api",
//   baseQuery: baseQueryInterceptor,
//   tagTypes: ["Auth", "Music", "User", "Categories", "Config"],
//   endpoints: () => ({}),
// });
