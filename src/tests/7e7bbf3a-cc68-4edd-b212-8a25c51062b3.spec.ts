
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7e7bbf3a-cc68-4edd-b212-8a25c51062b3', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });
  })
});
