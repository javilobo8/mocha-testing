
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a71c2871-922d-4b7e-b92b-def102babaa0', () => {
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

    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 32 ms', async () => {
      await delay(32);
    });
  })
});
