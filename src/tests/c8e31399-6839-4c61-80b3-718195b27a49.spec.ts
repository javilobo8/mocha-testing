
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c8e31399-6839-4c61-80b3-718195b27a49', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });
  })
});
