
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7b07a040-0c76-469c-9659-adb5e8b8f6cd', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });
  })
});
