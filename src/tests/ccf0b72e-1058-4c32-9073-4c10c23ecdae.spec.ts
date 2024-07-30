
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ccf0b72e-1058-4c32-9073-4c10c23ecdae', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });
  })
});
