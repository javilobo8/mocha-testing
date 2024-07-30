
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2ef5d29f-7169-46ad-ad61-0a50f1a078c4', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });
  })
});
