
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f532d72a-4a35-48e4-9af7-c938e943d762', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });
  })
});
