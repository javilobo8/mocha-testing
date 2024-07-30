
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c35672ee-2cde-4b7d-8d7e-ba9c02b5700e', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });
  })
});
