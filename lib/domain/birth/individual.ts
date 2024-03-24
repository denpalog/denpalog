import { AntennaKeyOrUnset } from "./antenna";
import { Generation } from "./generation";
import { DenpamenName } from "./name";
import { Surface } from "./surface";

export type Individual = {
  id: number | null;
  name: DenpamenName;
  surface: Surface;
  generation: Generation;
  antennaKey: AntennaKeyOrUnset;
};
