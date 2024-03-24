export const MIN_NAME_LENGTH = 0;
export const MAX_NAME_LENGTH = 8;

export class DenpamenName {
  private _name: string;

  constructor(name: string) {
    if (!DenpamenName.isInRange(name.length)) {
      throw new RangeError();
    }

    this._name = name;
  }

  private static isInRange(length: number) {
    return MIN_NAME_LENGTH <= length && length <= MAX_NAME_LENGTH;
  }

  public get nameString() {
    return this._name;
  }

  public equal(other: DenpamenName) {
    return this._name == other._name;
  }
}
