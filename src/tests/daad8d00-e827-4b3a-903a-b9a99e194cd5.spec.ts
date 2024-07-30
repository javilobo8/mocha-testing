
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - daad8d00-e827-4b3a-903a-b9a99e194cd5', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 39 ms', async () => {
      await delay(39);
    });
  })
});
