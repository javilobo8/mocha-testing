
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - dd67a079-e23a-4e26-bbf1-871d2db2f3ef', () => {
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

    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });
  })
});
