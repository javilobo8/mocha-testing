
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 25b9cda5-1dca-4849-ac9a-2e9e1f7c5002', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });
  })
});
