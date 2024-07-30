
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0023621a-75b3-4c02-8cc3-be26acd71afb', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });
  })
});
