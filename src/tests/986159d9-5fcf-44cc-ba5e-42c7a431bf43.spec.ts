
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 986159d9-5fcf-44cc-ba5e-42c7a431bf43', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });
  })
});
