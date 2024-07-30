
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c282f458-6fda-4aa4-b6a9-04b31b9f0014', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });
  })
});
