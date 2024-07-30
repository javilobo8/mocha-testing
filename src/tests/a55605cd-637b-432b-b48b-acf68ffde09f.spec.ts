
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a55605cd-637b-432b-b48b-acf68ffde09f', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });
  })
});
