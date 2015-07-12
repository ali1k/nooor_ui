'use strict';
import React from 'react';
import {NavLink} from 'fluxible-router';
import {list} from '../data/ayasCloud.js';
class Ayas extends React.Component {
    componentDidMount() {
        let currentComp = this.refs.ayas.getDOMNode();
        $(currentComp).jQCloud(list);
    }

    render() {
        let self = this;
        return (
            <div className="ui page grid">
              <div className="ui row">
                <div className="column ui">
                    <div className="ui segment" ref="ayas" style={{minHeight: '800px', fontFamily: 'nazanin'}}></div>
                </div>
              </div>
            </div>
        );
    }
}

module.exports = Ayas;
