
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0e398252-7c7b-4a53-9d05-c2ff13fa48b0', () => {
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

    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 32 ms', async () => {
      await delay(32);
    });
  })
});
