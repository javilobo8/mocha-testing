
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - dbd8c6d5-1cf9-496f-be41-3e817dcab9b0', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 50 ms', async () => {
      await delay(50);
    });
  })
});
