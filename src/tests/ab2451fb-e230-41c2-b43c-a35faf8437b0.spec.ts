
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ab2451fb-e230-41c2-b43c-a35faf8437b0', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });
  })
});
