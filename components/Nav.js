'use strict';
var React = require('react');
import { NavLink } from 'fluxible-router';

class Nav extends React.Component {
    render() {
        return (
            <nav ref="defaultNavbar" className="ui green menu inverted navbar page grid" style={{fontFamily: 'nazanin', direction: 'rtl'}}>
                    <a routeName="home" className="item" activeClass="active" href="/"> صفحه اصلی </a>
                    <a routeName="topics" className="item" activeClass="active" href="/quran/topics"> موضوعات </a>
                    <a routeName="ayas" className="item" activeClass="active" href="/quran/ayas"> آیه ها </a>
            </nav>
        );
    }
}

module.exports = Nav;
