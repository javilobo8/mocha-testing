
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - de9d19a9-b744-4e9c-b638-353cd1c7821b', () => {
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

    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });
  })
});
