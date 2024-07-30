
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ec1701b7-c6af-497e-9307-e5d61933305d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });
  })
});
