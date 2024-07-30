
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 858ce792-0200-4eab-a440-0b94b0528595', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });
  })
});
