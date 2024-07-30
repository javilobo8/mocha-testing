
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 1dc7d6f6-c40d-4b43-b2fc-25e35e589b50', () => {
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

    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });
  })
});
