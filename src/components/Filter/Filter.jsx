
import { PropTypes } from 'prop-types'
import { Component } from 'react'
import { Input, P } from './Filter.styled'
export default class Filter extends Component {
  render() {
    return (
      <>
        <P>Find contact by name</P>
        <label htmlFor="filter">
        <Input type="text" name="filter" onChange={this.props.handleSearch} />
      </label>
      </>
    )
  }
}


Filter.propTypes = {
  onChange: PropTypes.func,
}