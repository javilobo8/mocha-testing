
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 1b03a1d4-6ff1-4303-b3d9-e22a907408af', () => {
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

    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 32 ms', async () => {
      await delay(32);
    });
  })
});
