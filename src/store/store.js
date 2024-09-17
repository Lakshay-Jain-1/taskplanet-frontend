import { configureStore } from '@reduxjs/toolkit'
import TaskDialogreducers from './features/TaskDisclaimer'
export default configureStore({
  reducer: {
    taskDialogBoxDisplay :TaskDialogreducers
  },
})