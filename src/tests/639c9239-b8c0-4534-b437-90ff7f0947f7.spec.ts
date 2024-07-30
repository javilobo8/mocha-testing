
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 639c9239-b8c0-4534-b437-90ff7f0947f7', () => {
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

    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });
  })
});
