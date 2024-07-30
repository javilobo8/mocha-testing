
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 339f9fd8-6f1e-4ce8-9f93-4cf8e563bffb', () => {
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

    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });
  })
});
