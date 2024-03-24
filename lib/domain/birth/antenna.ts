export const noAntennaKey = "アンテナなし";
export const antennaKeys = [
  noAntennaKey,
  "ちょっとかいふく",
  "みんなちょっとかいふく",
  "ちょっとふっかつ",
] as const;

export type AntennaKey = (typeof antennaKeys)[number];
export type AntennaKeyOrUnset = AntennaKey | null;

export const isAntennaKey = (value: string): value is AntennaKey =>
  antennaKeys.includes(value);

export const isNoAntennaKey = (value: string) => noAntennaKey == value;
