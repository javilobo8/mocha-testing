
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d4904b58-322c-4d26-84c1-3f254b7eca4a', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });
  })
});
