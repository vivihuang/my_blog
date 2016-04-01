import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchAllData } from '../actions'

class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(fetchAllData())
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.memos.map((memo) => (<li key={memo.id}>{memo.content}</li>))}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({ dispatch })

const mapStateToProps = (state) => ({
  memos: state.fetchData
})

App.propTypes = {
  dispatch: PropTypes.func,
  memos: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
