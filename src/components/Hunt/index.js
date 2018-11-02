import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import Conditional from '../Conditional';
import Sidebar from '../Sidebar';
import SurvivorSummary from '../SurvivorSummary';

import ALL_SURVIVORS from '../../queries/allSurvivors';

import './styles.scss';

export default class Hunt extends PureComponent {

  state = { showAllSurvivors: false, showActiveSurvivors: true }

  allSurvivors = () => (
    this.setState({ showAllSurvivors: true })
  )

  get sidebarOptions() {
    return [
      { name: 'All Survivors', onClick: this.allSurvivors },
      { name: 'Active Survivors' }
    ]
  }

  render() {
    return (
      <div className="hunt">
        <span className="page-title">Hunt</span>
        <Sidebar context="Hunt" navigationTitle="Settlement" options={this.sidebarOptions} />
        <Conditional condition={this.state.showAllSurvivors}>
          <Query query={ALL_SURVIVORS}>
            {
              ({ loading, error, data }) => {
                if (loading) {
                  return <div>Loading...</div>
                }

                if (error) {
                  return console.log(error)
                }

                return (
                  data.survivors.map(survivor => <SurvivorSummary key={survivor.id} survivor={survivor} />)
                )
              }
            }
          </Query>
        </Conditional>
      </div>
    )
  }
}