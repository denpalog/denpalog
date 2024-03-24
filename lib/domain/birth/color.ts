export const colorKeys = [
  "赤色",
  "水色",
  "緑色",
  "橙色",
  "黄色",
  "青色",
  "白色",
  "紫色",
  "銀色",
  "金色",
  "桃色",
  "黒色",
] as const;

export type ColorKey = (typeof colorKeys)[number];
export const isColorKey = (value: string): value is ColorKey =>
  colorKeys.includes(value);

export type ColorKeyOrUnset = ColorKey | null;

export class Color {
  private id: number;
  private name: string;

  public constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  public equal(other: Color) {
    return this.id == other.id;
  }
}
