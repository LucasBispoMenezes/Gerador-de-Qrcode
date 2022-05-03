import React, { Component } from 'react'
import './css/App.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      inputUrl: 'bem-Vindo',
      response: '',
      proximo: '',
    }
  }

  componentDidMount() {
    this.fetchApi()
  }

  fetchApi = async () => {
    const { inputUrl } = this.state;
    URL = `https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl=${inputUrl}`
    const response = await fetch(URL)
    this.setState({
      response,
    })
  }
  handleChange = ({ target }) => {
    const { name, value } = target
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { inputUrl, response } = this.state
    const { url } = response
    return (
      <html>
        <main className="container">
          <h1>Gerador de QRcode</h1>
          <section>
            <img src={url} alt="Qrcode Gerado" />
            <div>
                <input type="text"
                  id="url-Generator"
                  name="inputUrl"
                  onChange={this.handleChange}
                  placeholder="Insira Uma URL valida"
                  />
                <button type="button" onClick={this.fetchApi}> ENVIAR </button>
            </div>
          </section>
        </main>
      </html>
    )
  }
}
