export const singleColorPatternKey = "単色";
export const patternKeys = [
  singleColorPatternKey,
  "マーブル",
  "虎",
  "ダイヤ",
] as const;

export type PatternKey = (typeof patternKeys)[number];
export type PatternKeyOrUnset = PatternKey | null;
export type SingleColorPatternKey = typeof singleColorPatternKey;
export type DoubleColorPatternKey = Exclude<PatternKey, SingleColorPatternKey>;

export const isSingleColorPatternKey = (
  patternKey: PatternKey
): patternKey is SingleColorPatternKey => patternKey == singleColorPatternKey;

export const isPatternKey = (value: string): value is PatternKey =>
  patternKeys.includes(value);

export class Pattern {
  private id: number;
  private name: number;

  constructor(id: number, name: number) {
    this.id = id;
    this.name = name;
  }

  public equal(other: Pattern) {
    return this.id == other.id;
  }
}
