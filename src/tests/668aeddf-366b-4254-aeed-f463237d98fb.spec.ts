
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 668aeddf-366b-4254-aeed-f463237d98fb', () => {
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

    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });
  })
});
