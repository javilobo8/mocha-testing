
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e0ab4791-8aa7-4ea3-850a-3e74c66d5b26', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 39 ms', async () => {
      await delay(39);
    });
  })
});
