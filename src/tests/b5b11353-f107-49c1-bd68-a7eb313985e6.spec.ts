
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b5b11353-f107-49c1-bd68-a7eb313985e6', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });
  })
});
