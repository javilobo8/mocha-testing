
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ccdfad6c-dfc2-48e3-99d9-1b45daf7188d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });
  })
});
