import React from 'react'
import PropTyps from 'prop-types'

import Loading from '../../components/Loading'

const withData = (WrappedComponent) => {
  return class ComponentWithData extends React.Component {
    static propTypes = {
      id: PropTyps.string,
    }

    constructor(props) {
      super(props)

      this.state = {
        data: null,
        loading: false,
        error: null,
      }
    }

    componentDidMount() {
      const { id } = this.props

      this.setState((state) => ({
        ...state,
        loading: true,
      }))

      // eslint-disable-next-line no-undef
      const url = id
        ? `${process.env.REACT_APP_API}/comics/${id}`
        : `${process.env.REACT_APP_API}/comics/current`
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((result) =>
          this.setState({
            data: result,
            loading: false,
            error: null,
          }),
        )
        .catch((err) =>
          this.setState((state) => ({
            ...state,
            loading: false,
            error: err,
          })),
        )
    }

    render() {
      const { data, error, loading } = this.state

      if (error) return <div>{error.message}</div>
      return (
        <>
          {loading && <Loading />}
          <WrappedComponent data={data} />
        </>
      )
    }
  }
}

export default withData
