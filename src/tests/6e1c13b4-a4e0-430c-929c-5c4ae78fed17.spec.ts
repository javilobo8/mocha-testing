
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6e1c13b4-a4e0-430c-929c-5c4ae78fed17', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });
  })
});
