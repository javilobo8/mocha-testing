
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2fbb3285-4c01-4fd5-b74c-9d9f1628758f', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });
  })
});
