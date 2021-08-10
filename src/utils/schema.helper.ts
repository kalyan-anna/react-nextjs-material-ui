import { normalize, schema } from "normalizr";

import { Establishment } from "../store/expo";

const establishmentSchema = new schema.Entity("establishments", {});

export const normalizeData = (originalData: Establishment[]) =>
  normalize(originalData, [establishmentSchema]).entities;
