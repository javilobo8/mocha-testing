
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0add609c-33e9-43fd-99b5-c6de31b6bc66', () => {
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

    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });
  })
});
