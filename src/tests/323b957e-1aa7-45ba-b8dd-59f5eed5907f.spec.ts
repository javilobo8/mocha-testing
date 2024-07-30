
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 323b957e-1aa7-45ba-b8dd-59f5eed5907f', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 32 ms', async () => {
      await delay(32);
    });
  })
});
