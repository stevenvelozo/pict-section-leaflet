const libPictLeafletView = require('../../../source/Pict-Section-Leaflet.js');

class PostcardMapView extends libPictLeafletView
{
	constructor(pFable, pOptions, pServiceHash)
	{
		super(pFable, pOptions, pServiceHash);
		this.options.DefaultDestinationAddress = '#Postcard-Content-Container';
	}
}

module.exports = PostcardMapView;
module.exports.default_configuration = {};