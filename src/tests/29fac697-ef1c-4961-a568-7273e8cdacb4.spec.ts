
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 29fac697-ef1c-4961-a568-7273e8cdacb4', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 50 ms', async () => {
      await delay(50);
    });
  })
});
