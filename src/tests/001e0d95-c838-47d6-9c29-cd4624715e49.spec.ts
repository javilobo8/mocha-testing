
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 001e0d95-c838-47d6-9c29-cd4624715e49', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });
  })
});
