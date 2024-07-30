
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a47ca0c3-fd78-48dd-a844-a9dce34fc30c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });
  })
});
