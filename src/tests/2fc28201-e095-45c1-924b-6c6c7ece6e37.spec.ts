
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2fc28201-e095-45c1-924b-6c6c7ece6e37', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });
  })
});
