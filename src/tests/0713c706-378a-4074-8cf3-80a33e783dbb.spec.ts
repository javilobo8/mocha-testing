
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0713c706-378a-4074-8cf3-80a33e783dbb', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });
  })
});
