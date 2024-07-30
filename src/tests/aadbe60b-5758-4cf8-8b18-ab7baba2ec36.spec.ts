
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - aadbe60b-5758-4cf8-8b18-ab7baba2ec36', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });
  })
});
