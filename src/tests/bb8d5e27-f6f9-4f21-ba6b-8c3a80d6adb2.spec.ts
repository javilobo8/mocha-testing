
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - bb8d5e27-f6f9-4f21-ba6b-8c3a80d6adb2', () => {
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

    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });
  })
});
