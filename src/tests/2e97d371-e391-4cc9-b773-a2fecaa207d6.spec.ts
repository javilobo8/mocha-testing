
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2e97d371-e391-4cc9-b773-a2fecaa207d6', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });
  })
});
