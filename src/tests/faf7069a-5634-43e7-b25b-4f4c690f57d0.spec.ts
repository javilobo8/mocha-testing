
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - faf7069a-5634-43e7-b25b-4f4c690f57d0', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });
  })
});
