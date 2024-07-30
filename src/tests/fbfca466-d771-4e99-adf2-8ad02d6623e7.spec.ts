
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - fbfca466-d771-4e99-adf2-8ad02d6623e7', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });
  })
});
