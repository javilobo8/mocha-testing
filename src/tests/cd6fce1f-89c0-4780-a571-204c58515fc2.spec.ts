
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - cd6fce1f-89c0-4780-a571-204c58515fc2', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });
  })
});
