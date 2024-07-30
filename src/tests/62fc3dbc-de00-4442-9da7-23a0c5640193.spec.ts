
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 62fc3dbc-de00-4442-9da7-23a0c5640193', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });
  })
});
