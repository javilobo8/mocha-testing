
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2d360279-0187-4971-9a3e-edf1dc7df0b4', () => {
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

    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });
  })
});
