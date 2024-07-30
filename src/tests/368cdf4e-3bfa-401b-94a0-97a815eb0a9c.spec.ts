
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 368cdf4e-3bfa-401b-94a0-97a815eb0a9c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });
  })
});
