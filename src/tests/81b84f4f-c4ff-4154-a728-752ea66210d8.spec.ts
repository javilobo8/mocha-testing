
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 81b84f4f-c4ff-4154-a728-752ea66210d8', () => {
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

    it('should delay 46 ms', async () => {
      await delay(46);
    });

    it('should delay 40 ms', async () => {
      await delay(40);
    });
  })
});
