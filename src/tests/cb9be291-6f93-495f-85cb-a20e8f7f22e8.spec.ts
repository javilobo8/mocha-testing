
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - cb9be291-6f93-495f-85cb-a20e8f7f22e8', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });
  })
});
