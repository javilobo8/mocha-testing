
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 386d3905-b36c-4372-84f1-1a75d0d9f511', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 18 ms', async () => {
      await delay(18);
    });
  })
});
