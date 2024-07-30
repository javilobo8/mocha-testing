
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a26e6919-970f-4467-a438-81a93aa3ebee', () => {
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

    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });
  })
});
