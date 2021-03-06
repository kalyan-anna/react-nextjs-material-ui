import { Establishment } from "./slice";
import { createAsyncThunkWithError } from "../../utils/thunk.helper";
import { expoSelectors } from "./selectors";
import { expoService } from "../../services";
import { normalizeData } from "../../utils/schema.helper";

export const loadEstablishments = createAsyncThunkWithError(
  "expo/loadAllEstablishments",
  async () => {
    const result = (await expoService.loadEstablishments()) as Establishment[];
    return normalizeData(result);
  },
  {
    condition: (arg, { getState }): boolean => {
      return !expoSelectors.isLoaded(getState() as any);
    },
  }
);
