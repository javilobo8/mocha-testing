
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d68f1929-f4e1-46eb-8e16-0d640c895dd8', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });
  })
});
