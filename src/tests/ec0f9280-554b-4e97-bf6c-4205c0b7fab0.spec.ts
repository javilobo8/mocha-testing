
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ec0f9280-554b-4e97-bf6c-4205c0b7fab0', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });
  })
});
