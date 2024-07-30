
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 1247db84-94ff-4bc2-a743-109c56daeaa2', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });
  })
});
