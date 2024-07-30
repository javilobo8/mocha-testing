
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6e1fd35f-43e8-4e8b-acd3-ef877b6742d5', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });
  })
});
