
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 39186327-b64a-4e25-9b19-9df3102a15f1', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 50 ms', async () => {
      await delay(50);
    });
  })
});
