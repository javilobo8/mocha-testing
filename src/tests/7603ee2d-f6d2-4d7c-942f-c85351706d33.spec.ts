
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7603ee2d-f6d2-4d7c-942f-c85351706d33', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });
  })
});
