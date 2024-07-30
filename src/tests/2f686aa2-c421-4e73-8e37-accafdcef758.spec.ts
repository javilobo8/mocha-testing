
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2f686aa2-c421-4e73-8e37-accafdcef758', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });
  })
});
