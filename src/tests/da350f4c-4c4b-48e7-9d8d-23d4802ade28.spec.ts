
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - da350f4c-4c4b-48e7-9d8d-23d4802ade28', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 32 ms', async () => {
      await delay(32);
    });
  })
});
