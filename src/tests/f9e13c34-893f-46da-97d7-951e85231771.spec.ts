
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f9e13c34-893f-46da-97d7-951e85231771', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });
  })
});
