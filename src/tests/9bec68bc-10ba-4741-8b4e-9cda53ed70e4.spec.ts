
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 9bec68bc-10ba-4741-8b4e-9cda53ed70e4', () => {
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

    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });
  })
});