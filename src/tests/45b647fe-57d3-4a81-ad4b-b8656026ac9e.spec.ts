
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 45b647fe-57d3-4a81-ad4b-b8656026ac9e', () => {
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

    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });
  })
});
