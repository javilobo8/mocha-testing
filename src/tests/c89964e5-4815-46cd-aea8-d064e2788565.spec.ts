
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c89964e5-4815-46cd-aea8-d064e2788565', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });
  })
});
