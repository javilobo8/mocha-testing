
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0b2e891a-e7a2-4f75-9534-28b87c7f4380', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });
  })
});
