import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
should();
import { Provider } from 'react-redux';
import store from '../src/store';
import IssMain from '../src/components/iss-main'

describe('IssMain component', function() {
    it('Should Render mainDiv, Buttons Linked to Map and Stream Routes', function(){
        let renderer = TestUtils.createRenderer();
        renderer.render(<IssMain />);
        let result = renderer.getRenderOutput();
        result.props.className.should.equal('issStyle');

        let mainDiv = result.props.children;
        mainDiv.props.className.should.equal('mainDiv')

        let divTitle = mainDiv.props.children[0];
        divTitle.props.className.should.equal('title');
        divTitle.props.children.should.equal('Where above Earth');

        let divTitleTwo = mainDiv.props.children[1];
        divTitleTwo.props.className.should.equal('titleTwo');
        divTitleTwo.props.children.should.equal('is the International Space Station?');

        let launch = mainDiv.props.children[2];
        launch.props.className.should.equal('launch');

        let launchMap = launch.props.children[0];
        launchMap.props.className.should.equal('launchMap');
        launchMap.props.children[0].props.to.should.equal('/map');
        launchMap.props.children[1].props.className.should.equal('launchApp');
        launchMap.props.children[1].props.children.should.equal('Launch Map');
        launchMap.props.children[1].type.should.equal('p');

        let launchStream = launch.props.children[1];
        launchStream.props.className.should.equal('launchStream');
        launchStream.props.children[0].props.to.should.equal('/stream');
        launchStream.props.children[1].props.className.should.equal('launchApp');
        launchStream.props.children[1].props.children.should.equal('Launch Live Feed');
        launchStream.props.children[1].type.should.equal('p');
    });
});
