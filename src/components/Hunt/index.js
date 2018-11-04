import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import HuntDetails from '../HuntDetails';
import ACTIVE_SURVIVORS from '../../queries/activeSurvivors';

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
        <Query query={ACTIVE_SURVIVORS}>
          {
            ({ loading, error, data }) => {
              if (loading) {
                return <div>Loading...</div>
              }

              if (error) {
                return console.log(error)
              }

              return (
                data.activeSurvivors.map(survivor => (
                  <HuntDetails survivor={survivor} key={survivor.name} id={survivor.id} />
                ))
              );
            }
          }
        </Query>
      </div>
    )
  }
}