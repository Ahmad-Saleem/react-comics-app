import React from 'react'
import PropTyps from 'prop-types'
import { connect } from 'react-redux'

import { fetchComicById } from '../store/action'
import Loading from '../../components/Loading'

const withData = (WrappedComponent) => {
  class ComponentWithData extends React.Component {
    static propTypes = {
      id: PropTyps.string,
      dispatchFetch: PropTyps.func,
      comics: PropTyps.object,
    }

    _isMounted = false

    componentDidMount() {
      this._isMounted = true
      const { id, dispatchFetch } = this.props

      dispatchFetch(id)
    }

    componentWillUnmount() {
      this._isMounted = false
    }

    shouldComponentUpdate() {
      if (!this._isMounted) return false
      return true
    }

    render() {
      const { data, error, loading } = this.props.comics

      if (error) return <div>{error.message}</div>
      return (
        <>
          {loading && <Loading />}
          <WrappedComponent data={data} />
        </>
      )
    }
  }
  const mapStateToProps = (state) => state
  const mapDispatchToProps = (dispatch) => ({
    dispatchFetch: (id) => dispatch(fetchComicById(id)),
  })

  return connect(mapStateToProps, mapDispatchToProps)(ComponentWithData)
}

export default withData
