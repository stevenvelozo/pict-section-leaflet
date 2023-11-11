/*
	Unit tests for PictSectionTuigrid Basic
	
*/

// This library just sets up node to run like a browser.
// It isn't necessary but allows you to use jquery.
//const libBrowserEnv = require('browser-env')
//libBrowserEnv();

const Chai = require('chai');
const Expect = Chai.expect;

const libPict = require('pict');

const libLeafletView = require(`../source/Pict-Section-Leaflet.js`);

suite
(
    'PictView Basic',
    () =>
    {
        setup(() => { });

        suite
            (
                'Basic Tests',
                () =>
                {
                    test(
                            'Basic Initialization',
                            (fDone) =>
                            {
                                // Initialize pict
                                let _Pict = new libPict();
                                // Setup an "environment" which allows us to inspect the activity -- pict has built in EnvironmentObject and EnvironmentLog
                                let _PictEnvironment = new libPict.EnvironmentObject(_Pict);
                                // Add our view to pict now that the environment is set up
                                let _LeafletView = _Pict.addView({ Configurated:'Value' }, 'Pict-View-Name',  libLeafletView);
                                // We might expect something more creative and unique to our view but this is a good start.
                                Expect(_LeafletView).to.be.an('object');
                                return fDone();
                            }
                        );
                }
            );
    }
);