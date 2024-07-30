
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ced78e96-8c2d-4d84-96e6-c89a69a21b5d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});
