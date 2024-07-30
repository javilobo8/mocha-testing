
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e245445a-2f95-4251-815b-9b351848f86e', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });
  })
});
