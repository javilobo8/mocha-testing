
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 81c9305f-8715-4a96-99c5-094412c40268', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });
  })
});
