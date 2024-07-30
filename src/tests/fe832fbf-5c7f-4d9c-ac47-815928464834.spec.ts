
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - fe832fbf-5c7f-4d9c-ac47-815928464834', () => {
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

    it('should delay 32 ms', async () => {
      await delay(32);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });
  })
});
