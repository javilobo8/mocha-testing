
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 22d13436-1e95-4c42-8c9e-8d907a597f9c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });
  })
});
