
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 450a7218-2fe9-4b95-b729-4b16f284e869', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });
  })
});
