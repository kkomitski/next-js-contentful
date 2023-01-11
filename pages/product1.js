import React from 'react'

export default function ProductPage(props) {
  return (
    <h1>{props.heading}</h1>
  )
}

export function getStaticProps() {
  // Get data from CMS

  return {
    props: {
      heading: "getStaticProps Heading"
    },
  }
}