
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 707c4191-91c3-465c-8ef4-ed4e0d568209', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });
  })
});
