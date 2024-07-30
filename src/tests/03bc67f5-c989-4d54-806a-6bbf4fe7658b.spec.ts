
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 03bc67f5-c989-4d54-806a-6bbf4fe7658b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });
  })
});
