
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 357715c8-7e7d-4881-bca6-18f96ffc5f7c', () => {
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

    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });
  })
});
