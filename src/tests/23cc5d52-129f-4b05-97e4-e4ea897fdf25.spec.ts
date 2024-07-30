
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 23cc5d52-129f-4b05-97e4-e4ea897fdf25', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });
  })
});
