'use strict';
import React from 'react';
import QuranTopicStore from '../stores/QuranTopicStore';
import {connectToStores} from 'fluxible-addons-react';
import {NavLink} from 'fluxible-router';
class QuranTopic extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    extractAyaNo(a){
        let tmp = a.split('#');
        return tmp[1];
    }
    render() {
        let self = this;
        let output = this.props.QuranTopicStore.ayas.map(function(node, index){
            return(
                <div className="item" key={index} style={{direction: 'rtl'}}>
                    <NavLink href={'/quran/aya/'+ encodeURIComponent(self.extractAyaNo(node.a))}> {node.text} </NavLink>- <span style={{color:'rgba(25, 92, 32, 0.88)'}}>{node.tr}</span>
                    <a target="_blank" href={node.a} className="ui green label">{self.extractAyaNo(node.a)}</a>
                </div>
            );
        });
        return (
            <div className="ui page grid" ref="topic">
              <div className="ui row">
                <div className="column">
                    <div className="ui segment right aligned">
                        <h1 style={{fontFamily: 'nazanin'}}>{decodeURIComponent(this.props.QuranTopicStore.topic)}</h1>
                        <div className="ui divided list" style={{fontFamily: 'nazanin'}}>
                            {output}
                        </div>
                    </div>
                </div>
              </div>
            </div>
        );
    }
}
QuranTopic.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};
QuranTopic = connectToStores(QuranTopic, [QuranTopicStore], function (context, props) {
    return {
        QuranTopicStore: context.getStore(QuranTopicStore).getState()
    };
});
module.exports = QuranTopic;
