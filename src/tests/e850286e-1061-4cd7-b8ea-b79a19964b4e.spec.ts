
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e850286e-1061-4cd7-b8ea-b79a19964b4e', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });
  })
});
