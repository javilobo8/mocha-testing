
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c44a6ecf-d7b4-4343-b07f-c391a6ae4837', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });
  })
});
