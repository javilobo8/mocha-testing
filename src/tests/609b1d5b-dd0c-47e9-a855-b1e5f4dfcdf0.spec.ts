
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 609b1d5b-dd0c-47e9-a855-b1e5f4dfcdf0', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 16 ms', async () => {
      await delay(16);
    });
  })
});
