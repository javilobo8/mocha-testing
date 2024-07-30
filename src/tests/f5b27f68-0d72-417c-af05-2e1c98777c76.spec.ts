
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f5b27f68-0d72-417c-af05-2e1c98777c76', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 18 ms', async () => {
      await delay(18);
    });
  })
});
