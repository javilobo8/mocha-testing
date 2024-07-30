
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 453e23d9-83eb-4851-858c-481442b991b4', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });
  })
});
