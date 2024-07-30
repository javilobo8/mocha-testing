
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 4fd1d518-0340-4575-afdc-9c3cc135c1c5', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });
  })
});
