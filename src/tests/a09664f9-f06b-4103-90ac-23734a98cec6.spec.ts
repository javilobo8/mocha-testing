
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a09664f9-f06b-4103-90ac-23734a98cec6', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });
  })
});
