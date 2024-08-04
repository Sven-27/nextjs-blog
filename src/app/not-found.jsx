import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <>
      <h2>Not Found</h2>
      <p>Sorry, the page you are looking for is not found.</p>
      <Link href="/">Go back to the homepage</Link>
    </>
  )
}

export default NotFound