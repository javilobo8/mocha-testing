
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7c564d06-b916-4f5a-86fc-6dba3340ca48', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });
  })
});
