
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0062a7e8-e376-4b0b-97de-453d2493dad1', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 5 ms', async () => {
      await delay(5);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 16 ms', async () => {
      await delay(16);
    });
  })
});
