
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 733cd4c5-dc2a-40b6-9150-350c175964b7', () => {
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

    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });
  })
});
