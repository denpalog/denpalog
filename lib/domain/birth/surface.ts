import { ColorKeyOrUnset } from "./color";
import {
  PatternKeyOrUnset,
  isSingleColorPatternKey,
  singleColorPatternKey,
} from "./pattern";

const adjustArrayLength = <T>(elements: T[], length: number) => {
  const padding = new Array(length).fill(null);
  return elements.concat(padding).slice(0, length);
};

export class Surface {
  private readonly _colorKeys: ColorKeyOrUnset[];
  private readonly _patternKey: PatternKeyOrUnset;

  private constructor(
    colorKeys: ColorKeyOrUnset[],
    patternKey: PatternKeyOrUnset
  ) {
    this._colorKeys = Surface.getAdjustedColorKeys(colorKeys, patternKey);
    this._patternKey = patternKey;
  }

  private static getAdjustedColorKeys(
    colorKeys: ColorKeyOrUnset[],
    patternKey: PatternKeyOrUnset
  ) {
    if (patternKey == null) {
      return [];
    } else if (isSingleColorPatternKey(patternKey)) {
      return adjustArrayLength(colorKeys, 1);
    } else {
      return adjustArrayLength(colorKeys, 2);
    }
  }

  public static reconstruct(
    colorKeys: ColorKeyOrUnset[],
    patternKey: PatternKeyOrUnset
  ) {
    return new Surface(colorKeys, patternKey);
  }

  public static empty() {
    return new Surface([], null);
  }

  public static fromSingleColor() {
    return new Surface([], singleColorPatternKey);
  }

  public changePattern(patternKey: PatternKeyOrUnset) {
    return new Surface(this._colorKeys, patternKey);
  }

  public changeColor(index: number, colorKey: ColorKeyOrUnset) {
    return new Surface(
      this._colorKeys.map((key, i) => {
        if (i == index) return colorKey;
        return key;
      }),
      this._patternKey
    );
  }

  public get patternKey() {
    return this._patternKey;
  }

  public get colorKeys() {
    return this._colorKeys;
  }
}
