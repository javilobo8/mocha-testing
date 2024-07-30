
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - fc6a5f3f-1a44-47a9-a35f-a2388757ab4f', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 16 ms', async () => {
      await delay(16);
    });
  })
});
