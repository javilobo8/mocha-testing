
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - db747ead-de6b-41f6-a35f-2dce5fb92a42', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });
  })
});
