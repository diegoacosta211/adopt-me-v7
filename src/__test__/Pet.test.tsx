/**
 * @jest-environment jsdom
 */
import React from 'react';
import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Pet from '../Pet';

test("displays default thumbnail", async () => {
  const pet = render(<BrowserRouter><Pet name={''} animal={'dog'} breed={''} images={[]} location={''} id={0} /></BrowserRouter>);
  const thumb = await pet.findByTestId("thumbnail") as HTMLImageElement;
  expect(thumb.src).toContain('none.jpg');
});

test("displays non-default thumbnail", async () => {
  const pet = render(<BrowserRouter><Pet name={''} animal={'dog'} breed={''} images={['1.jpg', '2.jpg']} location={''} id={0} /></BrowserRouter>);
  const thumb = await pet.findByTestId("thumbnail") as HTMLImageElement;
  expect(thumb.src).toContain('1.jpg');
})
