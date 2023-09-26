//  import { configureStore}  from "@reduxjs/toolkit";
// // // eslint-disable-next-line no-unused-vars
// import  userReducer from "../features/users/userslice";
// import movieReducer from "../features/movies/movieSlice";


// // export default configureStore({
// //     render :{
// //      users: userReducer 
// //     },
// //     middleware:getDefaultMiddleware({
// //         serializableCheck:false
// //     })
// // });



// export default configureStore({
//   reducer: {
//     user: userReducer,
//     movies: movieReducer,
  
//   },
 
// });

//import { legacy_createStore as configureStore } from "redux";
// import  userReducer  from "../features/users/userslice.js";


// export default configureStore({
//   reducer: {
//     user: userReducer,
//   },
  
// });


import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/users/userslice";
import movieReducer from "../features/movies/movieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});