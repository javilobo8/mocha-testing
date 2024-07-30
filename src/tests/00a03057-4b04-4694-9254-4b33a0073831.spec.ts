
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 00a03057-4b04-4694-9254-4b33a0073831', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });
  })
});
