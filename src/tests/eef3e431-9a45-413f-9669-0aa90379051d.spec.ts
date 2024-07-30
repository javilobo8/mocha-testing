
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - eef3e431-9a45-413f-9669-0aa90379051d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });
  })
});
