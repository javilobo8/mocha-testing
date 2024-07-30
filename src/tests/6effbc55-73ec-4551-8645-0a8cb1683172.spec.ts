
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6effbc55-73ec-4551-8645-0a8cb1683172', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });
  })
});
