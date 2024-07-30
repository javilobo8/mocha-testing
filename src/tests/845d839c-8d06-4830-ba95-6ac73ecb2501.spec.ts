
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 845d839c-8d06-4830-ba95-6ac73ecb2501', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});
