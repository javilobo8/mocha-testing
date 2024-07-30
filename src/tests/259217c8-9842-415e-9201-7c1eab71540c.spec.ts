
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 259217c8-9842-415e-9201-7c1eab71540c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });
  })
});
