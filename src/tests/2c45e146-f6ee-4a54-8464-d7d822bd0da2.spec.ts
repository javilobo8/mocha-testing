
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2c45e146-f6ee-4a54-8464-d7d822bd0da2', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });
  })
});
