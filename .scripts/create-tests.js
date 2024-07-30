import crypto from 'node:crypto';
import fs from 'node:fs/promises';

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateImplementation = (uuid) => {
  const delay1 = random(0, 50);
  const delay2 = random(0, 50);
  const delay3 = random(0, 50);

  return `
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ${uuid}', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay ${delay1} ms', async () => {
      await delay(${delay1});
    });

    it('should delay ${delay2} ms', async () => {
      await delay(${delay2});
    });

    it('should delay ${delay3} ms', async () => {
      await delay(${delay3});
    });
  })
});
`;
}

const NUMBER_OF_TESTS = 1000;

async function createTests() {
  const uuid = crypto.randomUUID();
  const implementation = generateImplementation(uuid);

  await fs.writeFile(`./src/tests/${uuid}.spec.ts`, implementation);
}

(async () => {
  for (let i = 0; i < NUMBER_OF_TESTS; i++) {
    await createTests();
  }
})();