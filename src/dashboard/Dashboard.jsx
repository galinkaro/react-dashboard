import React from 'react';
import { connect } from 'react-redux';
import Header from '../header/Header';
import Column from './components/column/Column';
import './Dashboard.scss';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard-wrapper">
                <Header />
                <div className="columns">
                    <Column title="To do"
                            tickets={this.props.items}
                    />
                    <Column title="In progress"
                            tickets={[]}
                    />
                    <Column title="Done"
                            tickets={[]}
                    />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        items: state.dashboard.tickets
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
