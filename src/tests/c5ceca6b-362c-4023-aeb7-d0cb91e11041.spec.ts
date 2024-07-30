
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c5ceca6b-362c-4023-aeb7-d0cb91e11041', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });
  })
});
