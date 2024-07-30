
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8a533e5c-3f1b-4107-8d43-93a8911ec072', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });
  })
});
