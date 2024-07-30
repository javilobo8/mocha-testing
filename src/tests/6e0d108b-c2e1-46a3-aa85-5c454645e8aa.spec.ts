
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6e0d108b-c2e1-46a3-aa85-5c454645e8aa', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });
  })
});
