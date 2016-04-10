import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {WontfixApp} from '../app/wontfix';

beforeEachProviders(() => [WontfixApp]);

describe('App: Wontfix', () => {
  it('should have the `defaultMeaning` as 42', inject([WontfixApp], (app: WontfixApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([WontfixApp], (app: WontfixApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

