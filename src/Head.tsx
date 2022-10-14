import React from 'react'
import { Helmet } from 'react-helmet'

const Head = (): JSX.Element => (
  <Helmet>
    <title>redichan</title>
    <meta
      name="description"
      content="redichan is a newborn social media. Please cheer us and bring your friends!"
    />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
  </Helmet>
)

export default Head
