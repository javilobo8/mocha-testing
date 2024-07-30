
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 65d0513a-e722-481f-b4ac-e70eb6c6989d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 5 ms', async () => {
      await delay(5);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });
  })
});
