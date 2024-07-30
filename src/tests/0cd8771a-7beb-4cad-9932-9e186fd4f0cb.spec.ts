
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0cd8771a-7beb-4cad-9932-9e186fd4f0cb', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });
  })
});
