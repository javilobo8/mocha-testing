
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 268b6818-398f-43bb-849d-b3ceee5f7d95', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });
  })
});
