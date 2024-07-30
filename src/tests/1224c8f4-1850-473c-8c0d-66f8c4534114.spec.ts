
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 1224c8f4-1850-473c-8c0d-66f8c4534114', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });
  })
});
