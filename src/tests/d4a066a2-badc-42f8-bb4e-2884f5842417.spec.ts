
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d4a066a2-badc-42f8-bb4e-2884f5842417', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });
  })
});
