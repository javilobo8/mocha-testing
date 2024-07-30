
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0b50d384-201d-4234-8da3-93ac8d064099', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });
  })
});
