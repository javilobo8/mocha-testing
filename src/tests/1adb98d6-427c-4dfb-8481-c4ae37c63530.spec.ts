
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 1adb98d6-427c-4dfb-8481-c4ae37c63530', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 16 ms', async () => {
      await delay(16);
    });
  })
});
