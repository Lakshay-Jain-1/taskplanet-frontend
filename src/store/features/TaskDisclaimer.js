import { createSlice } from '@reduxjs/toolkit'

export const TaskDialog = createSlice({
  name: 'taskDisclaimer',
  initialState: {
    displayDisclaimer: false,
    displaySubmit:false,
  },
  reducers: {
    displayDisclaimer: (state) => {
      state.displayDisclaimer = !state.displayDisclaimer
    },
    displaySubmit: (state) => {
      state.displaySubmit = !state.displaySubmit
    },

    
  },
})


export const { displayDisclaimer,displaySubmit } = TaskDialog.actions

export default TaskDialog.reducer