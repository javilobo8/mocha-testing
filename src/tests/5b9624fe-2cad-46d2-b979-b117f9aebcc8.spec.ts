
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5b9624fe-2cad-46d2-b979-b117f9aebcc8', () => {
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

    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });
  })
});
