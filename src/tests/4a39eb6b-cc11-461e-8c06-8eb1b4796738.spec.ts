
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 4a39eb6b-cc11-461e-8c06-8eb1b4796738', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 46 ms', async () => {
      await delay(46);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });
  })
});
