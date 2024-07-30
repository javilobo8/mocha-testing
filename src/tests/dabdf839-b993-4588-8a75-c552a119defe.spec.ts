
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - dabdf839-b993-4588-8a75-c552a119defe', () => {
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

    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });
  })
});
