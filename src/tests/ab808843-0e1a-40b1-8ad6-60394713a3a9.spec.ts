
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ab808843-0e1a-40b1-8ad6-60394713a3a9', () => {
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

    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });
  })
});
