import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchMeta, fetchImages, fetchRatings } from './actions'
import { connect } from 'react-redux'
import { components } from '@goodreads-v2/component-library'
import faker from 'faker'

const { BookGrid } = components

const books = (howMany = 10) => {
  let books = []
  faker.seed(1234)
  for (let i = 0; i < howMany; i++) {
    books.push({
      image: `https://picsum.photos/400/200?random=${i}`,
      title: `${faker.lorem.words(3)}`,
      description: `${faker.lorem.paragraph()}`,
      rating: `${faker.random.number({ min: 1, max: 5, precision: 0.01 })}`,
      bookId: `${faker.random.alphaNumeric(13)}`,
      onStarted: () => console.log('started'),
    })
  }
  return books
}

class BookList extends Component {
  static defaultProps = {
    fetchMeta: () => {},
  }
  static propTypes = {
    fetchMeta: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    const { dispatch } = this.props
    dispatch(fetchMeta())
    dispatch(fetchRatings())
    dispatch(fetchImages())
  }

  render() {
    const { meta, isLoadingMeta } = this.props
    console.log(meta)
    console.log(isLoadingMeta)
    return <BookGrid books={books()} />
  }
}

function mapStateToProps(state) {
  const { meta, isLoadingMeta, errorMeta } = state.books
  return { meta, isLoadingMeta, errorMeta }
}

export default connect(mapStateToProps)(BookList)
