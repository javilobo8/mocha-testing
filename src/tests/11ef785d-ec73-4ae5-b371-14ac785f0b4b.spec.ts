
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 11ef785d-ec73-4ae5-b371-14ac785f0b4b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });
  })
});
