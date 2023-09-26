/* eslint-disable no-unused-vars */

import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    name :"",
    emial:"",
    photo :""
}



const userSlice = createSlice({
    name :'user',
    initialState,
    reducers : {
        setUserLoginDetials : (state,action) =>{
            state.name = action.payload.name;
            state.emial  =  action.payload.emial;
            state.photo = action.payload.photo;

        },

        setSignOutState :state => {
            state.name =null;
            state.emial = null;
            state.photo = null;
        }

    }

});


export const {setUserLoginDetials, setSignOutState} = userSlice.actions;

export const selectUserName =state => state.user.name;

export const selectUserEmail = state => state.user.emial;

export const selectUserPhoto = state => state.user.photo;

export default userSlice.reducer


// const initialState = {
//   name: "",
//   email: "",
//   photo: "",
// };

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     setUserLoginDetails: (state, action) => {
//       state.name = action.payload.name;
//       state.email = action.payload.email;
//       state.photo = action.payload.photo;
//     },

//     setSignOutState: (state) => {
//       state.name = null;
//       state.email = null;
//       state.photo = null;
//     },
//   },
// });

// export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

// export const selectUserName = (state) => state.user.name;
// export const selectUserEmail = (state) => state.user.email;
// export const selectUserPhoto = (state) => state.user.photo;

// export default userSlice.reducer;
