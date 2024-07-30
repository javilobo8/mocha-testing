
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 20e73334-1b45-48b9-afbd-e90126968257', () => {
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

    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 32 ms', async () => {
      await delay(32);
    });
  })
});
