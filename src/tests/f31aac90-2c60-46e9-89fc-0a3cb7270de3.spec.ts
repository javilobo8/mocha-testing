
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f31aac90-2c60-46e9-89fc-0a3cb7270de3', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });
  })
});
