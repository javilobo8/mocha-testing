
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 87bf8512-1641-4c5a-83be-8d0fa55bd013', () => {
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

    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });
  })
});
