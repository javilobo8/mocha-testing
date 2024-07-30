
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 9721b18c-9980-4732-91c1-fd9c8a98ebd1', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });
  })
});
