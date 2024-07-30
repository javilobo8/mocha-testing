
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 1fe89e39-f30c-403f-b957-151844a93e15', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });
  })
});
