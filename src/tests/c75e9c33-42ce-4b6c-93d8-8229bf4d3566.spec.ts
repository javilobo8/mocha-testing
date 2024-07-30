
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c75e9c33-42ce-4b6c-93d8-8229bf4d3566', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });
  })
});
