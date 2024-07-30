
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b05f5a3e-c071-4b4d-8bb2-0375032469aa', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});
