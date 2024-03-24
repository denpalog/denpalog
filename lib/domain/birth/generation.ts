export const MIN_GENERATION = 1;
export const MAX_GENERATION = 9;

/**
 * 電波人間の世代を表します。
 */
export class Generation {
  private generation: number;

  private constructor(generation: number) {
    if (!Generation.isInRange(generation)) {
      throw new RangeError();
    }
    this.generation = generation;
  }

  public static reconstruct(generation: number) {
    return new Generation(generation);
  }

  public static fromNormalCatch() {
    return new Generation(1);
  }

  /**
   * 与えられた数値 generation が、正当な範囲にあるかを返します。
   * 範囲の定義は定数 MIN_GENERATION 以上、MAX_GENERATION 以下に存在するすべての自然数です。
   * @param generation 判定する数値。
   * @returns generationが正当な範囲に存在する場合はtrue。そうでなければfalse。
   */
  private static isInRange(generation: number) {
    if (generation < 0) return false;

    return MIN_GENERATION <= generation && generation <= MAX_GENERATION;
  }

  /**
   * @param other 比較対象のGeneration。
   * @returns 自身とotherとが同じ世代を表す場合にはtrue。そうでなければfalse。
   */
  public equal(other: Generation) {
    return this.generation == other.generation;
  }
}
