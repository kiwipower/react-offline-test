import React from "react";

import { getGeneration } from './generationMixService';

describe('Generation Mix Service', () => {
  it('should return production types array', async () => {
    await expect(getGeneration().then(res => res.length)).resolves.toBeGreaterThan(0);
  });
});
