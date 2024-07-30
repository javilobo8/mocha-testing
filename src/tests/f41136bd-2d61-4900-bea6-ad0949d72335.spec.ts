
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f41136bd-2d61-4900-bea6-ad0949d72335', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });
  })
});
