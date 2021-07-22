import React from 'react'
import axios from 'axios'
import Header from './components/Header'
import Content from './components/Content'

export default class App extends React.Component {
  state = {
    info: {},
    results: []
  }

  async componentDidMount () {
    await axios.get(`https://randomuser.me/api/?results=${Math.floor(Math.random() * (15 - 5 + 1) + 5)}`)
      .then(async (res) => {
        const response = res.data

        const log = { date: new Date().toISOString() };
        await axios.post(`http://localhost:3002/logs`, log)
          .then((res) => {
            const logId = res.data.insertId
            response.results.map(async (profile) => {
              const data = { profile: JSON.stringify(profile), round: logId }
              await axios.post(`http://localhost:3002/profiles`, data)
            })
          })

        this.setState({
          info: response.info,
          results: response.results
        })
      })
  }

  render () {
    const { results } = this.state;
    return (
      <div className="App">
        <Header
          course="Técnico em Mecatrônica"
          classNumber="111EAD 2019.2"
          filial="10050"
          pageLocation="Home da Turma"
        />
        <Content pageTitle="Participantes" profiles={ results }/>
      </div>
    )
  }
}
  