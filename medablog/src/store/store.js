import {configureStore} from '@reduxjs/toolkit';
import authSlice from './auth';
import postslice from './post';

const store = configureStore({
    reducer: {
        auth : authSlice,
        post : postslice,
        //TODO: add more slices here for posts
    }
});


export default store;