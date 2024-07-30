
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d4e709dd-6870-493e-8eff-eee112b43cf1', () => {
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

    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });
  })
});
