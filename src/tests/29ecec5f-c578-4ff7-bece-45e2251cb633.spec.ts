
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 29ecec5f-c578-4ff7-bece-45e2251cb633', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });
  })
});
