
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 54cb662e-ebd5-42c3-a7c2-3c06a4352433', () => {
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

    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });
  })
});
