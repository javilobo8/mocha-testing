
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d64483b6-8eaa-433b-8c96-763fb67599a0', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });
  })
});
