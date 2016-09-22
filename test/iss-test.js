import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
should();
import { Provider } from 'react-redux';
import store from '../src/store';
import IssMain from '../src/components/iss-main.js'

describe('IssMain component', function() {
    it('Should Render AppBar, mainDiv, Buttons Linked to Map and Stream Routes', function(){
        let renderer = TestUtils.createRenderer();
        renderer.render(<IssMain />);
        let result = renderer.getRenderOutput();
        result.props.className.should.equal('issStyle');

        let iss = result.props.children;
        iss.props.className.should.equal('iss');

        let appBar = iss.props.children.props.children[0];
        appBar.props.className.should.equal('appBar');
        appBar.props.title.should.equal('ISS Spotter');
        appBar.props.iconElementRight.props.children[0].props.to.should.equal('/');
        appBar.props.iconElementRight.props.children[1].props.to.should.equal('/map');
        appBar.props.iconElementRight.props.children[2].props.to.should.equal('/stream');

        let mainDiv = iss.props.children.props.children[1];
        mainDiv.props.className.should.equal('mainDiv')

        let divTitle = mainDiv.props.children[0];
        divTitle.props.className.should.equal('title');
        divTitle.props.children.should.equal('Where above Earth is the ISS?');

        let launch = mainDiv.props.children[1];
        launch.type.should.equal('div');
        launch.props.className.should.equal('launch');

        let launchMap = launch.props.children[0];
        launchMap.props.className.should.equal('launchMap');
        launchMap.props.children[0].props.to.should.equal('/map');
        launchMap.props.children[1].type.should.equal('p');

        let launchStream = launch.props.children[1];
        launchStream.props.className.should.equal('launchStream');
        launchStream.props.children[0].props.to.should.equal('/stream');
        launchStream.props.children[1].type.should.equal('p');
    });
});
