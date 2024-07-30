
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 552f1c4a-fe28-4cd5-99c9-ef2c90756b07', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });
  })
});
