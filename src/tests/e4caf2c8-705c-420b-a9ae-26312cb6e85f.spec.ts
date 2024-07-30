
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e4caf2c8-705c-420b-a9ae-26312cb6e85f', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });
  })
});
