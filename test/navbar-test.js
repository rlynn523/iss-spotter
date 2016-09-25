import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
should();
import { Provider } from 'react-redux';
import store from '../src/store';
import NavBar from '../src/components/navbar'

describe('NavBar component', function() {
    it('Should Render NavBar Component with Links', function(){
        let renderer = TestUtils.createRenderer();
        renderer.render(<NavBar />);
        let result = renderer.getRenderOutput();
        result.props.children.props.className.should.equal('appBar');
        result.props.children.props.title.should.equal('ISS Spotter');
        result.props.children.props.iconElementRight.props.children[0].props.to.should.equal('/');
        result.props.children.props.iconElementRight.props.children[1].props.to.should.equal('/map');
        result.props.children.props.iconElementRight.props.children[2].props.to.should.equal('/stream');
    });
});
