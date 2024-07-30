
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 80c1c117-5ad8-4e86-b556-bc98316b2da3', () => {
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

    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });
  })
});
