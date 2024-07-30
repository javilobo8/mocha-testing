
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - bb15a4fb-48dc-4136-9d2f-9b743b2c6db9', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });
  })
});
