
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d530f1b6-dead-424c-8ba1-caf5c23ce743', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });
  })
});
