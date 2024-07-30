
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f19c0d9e-1b66-4478-93fa-2c4c60e77de1', () => {
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

    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });
  })
});
