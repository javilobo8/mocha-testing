
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - dfd9c440-9cd7-4f91-a747-e9cd3974638b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });
  })
});
