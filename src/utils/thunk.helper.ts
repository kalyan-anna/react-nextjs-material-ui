import {
  AsyncThunkOptions,
  AsyncThunkPayloadCreator,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export function createAsyncThunkWithError<
  Returned,
  ThunkArg = void,
  Config = {}
>(
  typePrefix: string = "",
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, {}>,
  options?: AsyncThunkOptions<ThunkArg, Config>
) {
  return createAsyncThunk<Returned, ThunkArg>(typePrefix, payloadCreator, {
    ...options,
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
