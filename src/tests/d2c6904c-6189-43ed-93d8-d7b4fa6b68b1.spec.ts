
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d2c6904c-6189-43ed-93d8-d7b4fa6b68b1', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });
  })
});
