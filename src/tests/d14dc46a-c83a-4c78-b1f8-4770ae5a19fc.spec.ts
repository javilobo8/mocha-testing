
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d14dc46a-c83a-4c78-b1f8-4770ae5a19fc', () => {
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

    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });
  })
});
