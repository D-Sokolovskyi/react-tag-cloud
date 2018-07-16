import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import Wrap from '../hoc/Wrap';
import withClass from '../hoc/withClass';
import classes from './App.css';
import Tags from '../components/Tags/Tags';
import Info from '../components/Info/Info';

class App extends PureComponent {

  state = {
    data: [],
    activeItem: null
  }

  componentDidMount() {
    axios.get('https://gist.githubusercontent.com/ButuzGOL/d856ae6d70ffd02a8a37/raw/Data')
      .then(response => {
        this.setState({data: response.data});
        
        if (this.props.location.hash) {
          const trimmedRouteHash = this.props.location.hash.replace('#', '').split('%20').join(' ');
          this.routeHandler(trimmedRouteHash);
        }
      });
  }

  routeHandler(id) {
    const activeItem = {...this.state.data.find(item => item.id === id)};
    this.setState({activeItem: activeItem});
  }

  render() {
    return (
      <Wrap>
        <header className={classes['App-header']}>
          <h1 className={classes['App-title']}>React Tag Cloud</h1>
        </header>
        <main className={classes['App-content']}>
          <Tags data={this.state.data} clicked={this.routeHandler.bind(this)} />
          <Info item={this.state.activeItem} />
        </main>
      </Wrap>
    );
  }
}

export default withRouter( withClass(App, classes.App) );
