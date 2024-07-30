
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 128fc1ab-fbc1-47df-81b7-e01047a6a6db', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });
  })
});
