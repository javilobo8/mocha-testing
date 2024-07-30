
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 41ece362-75bb-4908-883c-a60699dac3d0', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });
  })
});
