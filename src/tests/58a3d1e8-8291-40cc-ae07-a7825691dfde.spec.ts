
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 58a3d1e8-8291-40cc-ae07-a7825691dfde', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });
  })
});
