
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 50f8e7f2-7b43-4295-80be-e2655b9999e8', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });
  })
});
