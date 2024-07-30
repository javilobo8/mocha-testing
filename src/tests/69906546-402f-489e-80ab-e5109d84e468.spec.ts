
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 69906546-402f-489e-80ab-e5109d84e468', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });
  })
});
