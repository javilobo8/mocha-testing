
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c5d3cff3-6f52-4a8f-8c3c-75f2bedc3ff5', () => {
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

    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });
  })
});
