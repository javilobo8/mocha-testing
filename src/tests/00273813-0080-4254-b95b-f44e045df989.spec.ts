
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 00273813-0080-4254-b95b-f44e045df989', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });
  })
});
