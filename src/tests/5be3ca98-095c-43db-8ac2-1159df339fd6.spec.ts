
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5be3ca98-095c-43db-8ac2-1159df339fd6', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 16 ms', async () => {
      await delay(16);
    });
  })
});
