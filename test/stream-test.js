import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
should();
import { Provider } from 'react-redux';
import store from '../src/store';
import IssViewer from '../src/components/stream.js'

describe('IssViewer component', function() {
    it('Should Render Iss Video Stream', function(){
        let renderer = TestUtils.createRenderer();
        renderer.render(<IssViewer />);
        let result = renderer.getRenderOutput();
        result.props.className.should.equal('streamStyle');

        let paperStream = result.props.children.props;
        paperStream.className.should.equal('paperStream');

        let videoStream = paperStream.children[0];
        videoStream.type.should.equal('iframe');
        videoStream.props.className.should.equal('videoStream');
    });
});
