
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 9d1a690c-4dd3-4782-8a61-e51de44258ab', () => {
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

    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });
  })
});
