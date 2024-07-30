
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d409c15f-8fb1-4a6e-ba2e-d7d1fc9beae6', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });
  })
});
