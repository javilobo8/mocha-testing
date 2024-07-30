
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3b920598-7a77-47f3-999c-f157d37157f6', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });
  })
});
