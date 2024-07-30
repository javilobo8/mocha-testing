
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d6023ed6-fe36-4318-b012-bac6606c9806', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });
  })
});
