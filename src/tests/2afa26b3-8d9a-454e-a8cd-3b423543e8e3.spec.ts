
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2afa26b3-8d9a-454e-a8cd-3b423543e8e3', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });
  })
});
