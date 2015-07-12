'use strict';
import React from 'react';
import QuranAyaStore from '../stores/QuranAyaStore';
import {connectToStores} from 'fluxible-addons-react';
import {NavLink} from 'fluxible-router';
class QuranAya extends React.Component {
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
        let output = this.props.QuranAyaStore.topics.map(function(node, index){
            return(
                <div className="item" key={index} style={{direction: 'rtl'}}>
                    <NavLink href={'/quran/topic/'+ encodeURIComponent(node.t)}> {node.t} </NavLink>
                </div>
            );
        });
        return (
            <div className="ui page grid" ref="topic">
              <div className="ui row">
                <div className="column">
                    <div className="ui segment right aligned">
                        <h1 style={{fontFamily: 'nazanin'}}><a target="_blank" href={decodeURIComponent(this.props.QuranAyaStore.aya)} className="ui green label">{self.extractAyaNo(decodeURIComponent(this.props.QuranAyaStore.aya))}</a></h1>
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
QuranAya.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};
QuranAya = connectToStores(QuranAya, [QuranAyaStore], function (context, props) {
    return {
        QuranAyaStore: context.getStore(QuranAyaStore).getState()
    };
});
module.exports = QuranAya;
