
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - df076f8a-f426-4806-8d88-4e561f726147', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });
  })
});
