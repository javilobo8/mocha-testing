
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - dfe0addc-0c36-4dc3-9f31-8b4efaa7fbdc', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });
  })
});
