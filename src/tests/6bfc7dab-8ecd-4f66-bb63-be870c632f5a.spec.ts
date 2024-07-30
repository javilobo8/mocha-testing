
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6bfc7dab-8ecd-4f66-bb63-be870c632f5a', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });
  })
});
