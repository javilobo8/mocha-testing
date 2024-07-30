
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - eb550191-1314-4387-abaa-495857e501d0', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });
  })
});
