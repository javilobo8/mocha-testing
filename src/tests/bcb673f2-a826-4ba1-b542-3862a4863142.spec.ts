
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - bcb673f2-a826-4ba1-b542-3862a4863142', () => {
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

    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 40 ms', async () => {
      await delay(40);
    });
  })
});
