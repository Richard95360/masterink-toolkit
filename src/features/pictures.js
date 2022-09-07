import {createSlice} from '@reduxjs/toolkit';

export const picturesSlice = createSlice({
    name:'pictures',
    initialState : {
        pictures: null
    },
    reducers : {
        setPictureData: (state, action) => {
            state.pictures = action.payload
        },
        addPictureData: (state,action) => {
            state.pictures.push(action.payload)
        },
        editPictureData : (state, action) => {
            state.pictures = state.pictures.map((pic) => {
                if(pic.id === action.payload[1]) {
                    return {
                        ...pic,
                        artist: action.payload[0],
                    }
                } else {
                  return pic;
                }
            });
        },
        deletePictureData: (state,action) => {
           state.pictures = state.pictures.filter((x) => x.id !== action.payload)
        }
        
    }
})

export const {setPictureData, addPictureData,editPictureData, deletePictureData} = picturesSlice.actions;

export default picturesSlice.reducer;