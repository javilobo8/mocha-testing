
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 9cdae29a-52fe-48ad-9d92-b5c92bf2027d', () => {
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

    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });
  })
});
