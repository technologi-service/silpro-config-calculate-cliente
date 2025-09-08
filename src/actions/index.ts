import { getAllPuntuacionesClientes } from "./clientes/clientes-score-vcs";
import { getAllClientes } from "./clientes/get-clientes";
import { getRangos } from "./config-rangos/get-rangos";
import { getVariables } from "./config-variables.ts/get-variables";
import { updateVariable } from "./config-variables.ts/update-variables";
import { getSegmentos } from "./metricas/get-segmentos";

export const server = {
  getVariables,
  updateVariable,
  getRangos,
  getAllClientes,
  getAllPuntuacionesClientes,
  getSegmentos,


}
