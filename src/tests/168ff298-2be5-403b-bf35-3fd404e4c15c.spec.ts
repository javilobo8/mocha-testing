
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 168ff298-2be5-403b-bf35-3fd404e4c15c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });
  })
});
