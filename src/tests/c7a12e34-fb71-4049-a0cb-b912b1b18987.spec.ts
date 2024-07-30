
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c7a12e34-fb71-4049-a0cb-b912b1b18987', () => {
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

    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });
  })
});
