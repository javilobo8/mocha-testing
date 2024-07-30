
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - fbbab4cc-62a5-43f0-afe1-ba608a3024c3', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });
  })
});
