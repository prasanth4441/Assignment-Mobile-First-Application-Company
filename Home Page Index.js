import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {
    tableData: '',
  }

  componentDidMount() {
    this.fetchingJokes()
  }

  fetchingJokes = async () => {
    const url =
      'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10'

    const response = await fetch(url)

    const responseValue = await response.json()

    const randomJoke = responseValue.jokes[0]
    console.log(randomJoke)
    this.setState({tableData: randomJoke})
  }

  render() {
    const {tableData} = this.state

    return (
      <div className="App">
        <table>
          <tbody>
            <div className="tabledata">
              <tr>
                <td className="data">Category</td>
                <td>{tableData.category}</td>
              </tr>
            </div>
            <div className="tabledata">
              <tr>
                <td>Type: </td>
                <td>{tableData.type}</td>
              </tr>
            </div>
            <div className="tabledata">
              <tr>
                <td>Joke:</td>
                <td> {tableData.joke}</td>
              </tr>
            </div>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Home
