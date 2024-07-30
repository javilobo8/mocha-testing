
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 9a9e9494-dfbb-464f-9ce5-0bbce10024b5', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });
  })
});
