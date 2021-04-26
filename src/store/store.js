import { configureStore } from "@reduxjs/toolkit";
import reducer from "./dummyreducer";
const store = configureStore({
  reducer: { dummy: reducer },
});

export default store;
