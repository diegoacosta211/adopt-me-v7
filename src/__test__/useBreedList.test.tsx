/**
 * @jest-environment jsdom
 */

import { expect, test } from '@jest/globals';
import { renderHook } from '@testing-library/react-hooks';
import useBreedList from '../hooks/useBreedList';
import fetch from 'jest-fetch-mock';


test("Gives an empty list with no animal", () => {
  const { result } = renderHook(() => useBreedList());
  const [breedList, status] = result.current;
  expect(breedList).toHaveLength(0);
  expect(status).toBe("unloaded");
})

test("Gives back breeds with animal", async() => {
  const breeds = [
    'Havanese',
    'Bichon Frise',
    'Poodle',
    'Maltese',
    'Golden Retriever',
    'Labrador',
    'Husky',
  ];

  fetch.mockResponseOnce(
    JSON.stringify({
      animal: 'dog',
      breeds,
    })
  );

  const { result, waitForNextUpdate } = renderHook(()=>useBreedList('dog'));

  await waitForNextUpdate();
  const [breedList, status] = result.current;

  expect(breedList).toEqual(breeds);
  expect(status).toBe("loaded");
})
