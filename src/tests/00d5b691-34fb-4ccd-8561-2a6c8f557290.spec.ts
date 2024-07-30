
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 00d5b691-34fb-4ccd-8561-2a6c8f557290', () => {
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

    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 50 ms', async () => {
      await delay(50);
    });
  })
});
