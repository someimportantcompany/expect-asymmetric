export default class AsymmetricMatcher {
  public $$typeof = Symbol.for('jest.asymmetricMatcher');
  protected description: string;
  protected compare: (value: unknown) => boolean;

  public constructor(description: string, compare: (value: unknown) => boolean) {
    this.description = description;
    this.compare = compare;
  }

  public asymmetricMatch(value: unknown) {
    return this.compare(value);
  }

  public toAsymmetricMatcher() {
    return this.description;
  }

  public toString() {
    return this.description;
  }
}
