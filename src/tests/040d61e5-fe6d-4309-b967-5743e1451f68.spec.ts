
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 040d61e5-fe6d-4309-b967-5743e1451f68', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });
  })
});
