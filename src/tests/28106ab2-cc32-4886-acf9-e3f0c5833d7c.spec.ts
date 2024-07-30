
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 28106ab2-cc32-4886-acf9-e3f0c5833d7c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });
  })
});
