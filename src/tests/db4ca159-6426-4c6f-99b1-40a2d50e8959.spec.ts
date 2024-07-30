
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - db4ca159-6426-4c6f-99b1-40a2d50e8959', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });
  })
});
