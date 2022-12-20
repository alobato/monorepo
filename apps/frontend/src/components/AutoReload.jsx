import React, { Component } from 'react'
import PropTypes from 'prop-types'

// https://marmelab.com/blog/2016/08/29/auto-reload-spa-on-mobile-setinterval.html

class AutoReload extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    delay: PropTypes.number.isRequired
  }

  static defaultProps = {
    url: '/',
    delay: 5 * 60 * 1000 // 5 minutes
  }

  state = {
    codeHasChanged: false
  }

  fetchSource = () => {
    return fetch(`${this.props.url}?${new Date().getTime()}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('offline')
        }
        return response.text()
      })
      .then((html) => {
        const hash = this.hash(html)
        if (!this.previousHash) {
          this.previousHash = hash
          return
        }
        if (this.previousHash !== hash) {
          this.previousHash = hash
          this.setState({ codeHasChanged: true })
        }
      })
      .catch(() => {
        /* do nothing */
      })
  }

  hash(str) {
    const len = str.length
    let hash = 0
    if (len === 0) return hash
    let i
    for (i = 0; i < len; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i)
      hash |= 0 // Convert to 32bit integer
    }
    return hash
  }

  reloadApp(e) {
    window.location.reload(true)
    e.preventDefault()
  }

  componentDidMount() {
    this.fetchSource()
    this.interval = setInterval(this.fetchSource, this.props.delay)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    if (!this.state.codeHasChanged) return null

    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          zIndex: 5,
          backgroundColor: 'rgb(255, 249, 169)',
          left: 'calc(50% - 150px)',
          width: '300px',
          textAlign: 'center',
          height: '45px',
          lineHeight: '1.2',
          padding: '3px 0 0 0',
          color: 'rgba(0, 0, 0, 0.62)'
        }}
      >
        <div>Uma nova versão foi lançada.</div>
        <div>
          <a href="/" onClick={this.reloadApp}>
            Clique aqui para atualizar.
          </a>
        </div>
      </div>
    )
  }
}

export default AutoReload
