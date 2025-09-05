import { getRangos } from "./config-rangos/get-rangos";
import { getVariables } from "./config-variables.ts/get-variables";
import { updateVariable } from "./config-variables.ts/update-variables";

export const server = {
  getVariables,
  updateVariable,
  getRangos,

}
