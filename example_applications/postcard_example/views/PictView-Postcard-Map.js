const libPictLeafletView = require('../../../source/Pict-Section-Leaflet.js');

class PostcardMapView extends libPictLeafletView
{
	constructor(pFable, pOptions, pServiceHash)
	{
		super(pFable, pOptions, pServiceHash);
		this.options.DefaultDestinationAddress = '#Postcard-Content-Container';
	}

	onAfterInitializeLeaflet()
	{
		let libLeaflet = this._leafletPrototype;
		libLeaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',
			{
				attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
			}).addTo( this.leaflet );
		// libLeaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
		// 	{
		// 		maxZoom: 19,
		// 		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		// 	}).addTo(this.leaflet);
	}
}

module.exports = PostcardMapView;
module.exports.default_configuration = {};