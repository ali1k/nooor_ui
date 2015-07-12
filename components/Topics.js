'use strict';
import React from 'react';
import {NavLink} from 'fluxible-router';
import {list} from '../data/topicsCloud.js';
class Topics extends React.Component {
    componentDidMount() {
        let currentComp = this.refs.topics.getDOMNode();
        $(currentComp).jQCloud(list);
    }
    render() {
        let self = this;
        return (
            <div className="ui page grid">
              <div className="ui row">
                <div className="column ui">
                    <div className="ui segment" ref="topics" style={{minHeight: '800px', fontFamily: 'nazanin'}}></div>
                </div>
              </div>
            </div>
        );
    }
}

module.exports = Topics;
