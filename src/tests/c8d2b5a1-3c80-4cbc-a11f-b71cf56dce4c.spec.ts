
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c8d2b5a1-3c80-4cbc-a11f-b71cf56dce4c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });
  })
});
