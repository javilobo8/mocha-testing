
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7912774c-1cb4-413d-942b-a81905e1dc9c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });
  })
});
