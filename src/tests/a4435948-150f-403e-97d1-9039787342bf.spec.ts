
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a4435948-150f-403e-97d1-9039787342bf', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });
  })
});
