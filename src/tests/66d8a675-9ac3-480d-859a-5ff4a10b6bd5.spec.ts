
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 66d8a675-9ac3-480d-859a-5ff4a10b6bd5', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });
  })
});
