
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d2426e4d-9bba-4ed5-9730-2dc6ec15d401', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 39 ms', async () => {
      await delay(39);
    });
  })
});
