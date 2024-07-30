
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f2426c24-4bd7-47a7-814b-4b06217a15b6', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });
  })
});
