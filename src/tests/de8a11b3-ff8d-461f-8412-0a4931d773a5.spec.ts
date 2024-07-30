
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - de8a11b3-ff8d-461f-8412-0a4931d773a5', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });
  })
});
