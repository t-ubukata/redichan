import React from 'react'
import { render, waitFor } from '@testing-library/react'
import Helmet from './Head'

test('has a title', async () => {
  render(<Helmet />)
  await waitFor(() => expect(document.title).toEqual('redichan'))
  // TODO: Test meta elements.
})
