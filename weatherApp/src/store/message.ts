import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface MessageState {
  type: "success" | "warning" | "error" | "info";
  content: string;
}

const initialState: MessageState | {} = {};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    pushMsg: (state, action: PayloadAction<MessageState>) => {
      return action.payload;
    },
  },
});

export type { MessageState };
export const { pushMsg } = messageSlice.actions;

export default messageSlice.reducer;
