
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - af993f8f-1d48-4e8f-beba-c43df99c7df1', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 16 ms', async () => {
      await delay(16);
    });
  })
});
