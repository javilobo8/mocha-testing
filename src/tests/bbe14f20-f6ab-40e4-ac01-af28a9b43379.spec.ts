
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - bbe14f20-f6ab-40e4-ac01-af28a9b43379', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });
  })
});
