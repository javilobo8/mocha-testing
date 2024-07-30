
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 9cd60067-7be0-4415-b17e-fb5fb8c5fe47', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });
  })
});
