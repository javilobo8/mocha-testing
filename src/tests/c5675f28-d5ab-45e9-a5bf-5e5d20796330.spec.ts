
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c5675f28-d5ab-45e9-a5bf-5e5d20796330', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });
  })
});
