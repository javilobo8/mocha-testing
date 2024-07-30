
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b593b2e8-d1c7-4afa-b4a2-9954e23f22aa', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });
  })
});
