
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - cfe69e2b-490a-46da-a820-b2b4c7b0d342', () => {
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

    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });
  })
});
