
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ddac0ded-09de-4131-af35-b0506da98bc3', () => {
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

    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });
  })
});
