const libPictApplication = require('pict-application');

const libMainApplicationView = require('./views/PictView-Postcard-MainApplication.js');

const libMapView = require('./views/PictView-Postcard-Map.js');

class PostcardApplication extends libPictApplication
{
	constructor(pFable, pOptions, pServiceHash)
	{
		super(pFable, pOptions, pServiceHash);

		this.pict.addView('PostcardNavigation', require('./views/PictView-Postcard-Navigation.json'));
		this.pict.addView('PostcardAbout', require('./views/PictView-Postcard-Content-About.json'));
		this.pict.addView('PostcardLegal', require('./views/PictView-Postcard-Content-Legal.json'));
		this.pict.addView('PostcardMainApplication', {}, libMainApplicationView);
		this.pict.addView('PostcardMap', {}, libMapView);
	}
};

module.exports = PostcardApplication

module.exports.default_configuration = require('./Pict-Application-Postcard-Configuration.json');