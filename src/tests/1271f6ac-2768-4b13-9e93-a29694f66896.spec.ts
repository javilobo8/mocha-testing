
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 1271f6ac-2768-4b13-9e93-a29694f66896', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });
  })
});
