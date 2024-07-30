
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e19a2426-7023-4dac-b7a6-c9e014fdf288', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });
  })
});
