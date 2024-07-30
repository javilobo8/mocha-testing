
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c7022c72-153b-4942-aeb2-32833da5f49c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 50 ms', async () => {
      await delay(50);
    });
  })
});
