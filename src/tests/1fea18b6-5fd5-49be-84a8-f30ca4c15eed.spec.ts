
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 1fea18b6-5fd5-49be-84a8-f30ca4c15eed', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });
  })
});
