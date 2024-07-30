
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 43521218-32c5-4f93-9a82-8f767d08adb5', () => {
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

    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });
  })
});
