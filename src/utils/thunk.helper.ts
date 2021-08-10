import { AsyncThunkPayloadCreator, createAsyncThunk } from "@reduxjs/toolkit";

export function createAsyncThunkWithError<Returned, ThunkArg = void>(
  typePrefix: string = "",
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, {}>
) {
  return createAsyncThunk<Returned, ThunkArg>(typePrefix, payloadCreator, {
    serializeError: (error: any) => {
      return {
        data: error.response?.data,
        name: error.name,
        message: error.message,
        statusCode: error.response?.status,
      } as any;
    },
  });
}
