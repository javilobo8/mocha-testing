
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 9aaa64d4-2364-46bd-ae48-67ca2c227604', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });
  })
});
