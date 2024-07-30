
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 209198c7-01a6-4768-a35f-31f793d9abd7', () => {
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

    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });
  })
});
