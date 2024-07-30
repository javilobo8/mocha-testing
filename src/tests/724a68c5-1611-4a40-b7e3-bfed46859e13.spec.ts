
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 724a68c5-1611-4a40-b7e3-bfed46859e13', () => {
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

    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });
  })
});
