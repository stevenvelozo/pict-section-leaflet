const libPictViewClass = require('pict-view');

class PictSectionLeaflet extends libPictViewClass
{
	constructor(pFable, pOptions, pServiceHash)
	{
		let tmpOptions = Object.assign({}, require('./Pict-Section-Leaflet-DefaultConfiguration.json'), pOptions);

		super(pFable, tmpOptions, pServiceHash);

		this.initialRenderComplete = false;

		this.leafletInitialCenter = this.options.LeafletInitialCenter;
		this.leafletInitialZoom = this.options.LeafletInitialZoom;
	}

	onBeforeInitialize()
	{
		super.onBeforeInitialize();

		this._leafletPrototype = false;

		this.leaflet = false;
	}

	connectLeafletPrototype(pLeafletPrototype)
	{
		if (typeof (pLeafletPrototype) != 'undefined')
		{
			this._leafletPrototype = pLeafletPrototype;
		}
		else
		{
			this.log.trace(`PICT-Leaflet No Leaflet Prototype defined or explicitly set; looking for it in the window object.`);
			if (typeof (window) != 'undefined')
			{
				if (typeof (window.L) != 'undefined')
				{
					this.log.trace(`PICT-Leaflet Found Leaflet Prototype in window.L.`);
					this.connectLeafletPrototype(window.L);
				}
				else
				{
					this.log.error(`PICT-Leaflet No Leaflet Prototype found in window.L.`);
					return false;
				}
			}
			else
			{
				this.log.error(`PICT-Leaflet No Leaflet Prototype found in window.leaflet -- window object unavailable.  The map will not function.`);
				return false;
			}
		}
	}

	onAfterRender(pRenderable)
	{
		super.onAfterRender(pRenderable);
		if (this.leaflet)
		{
			delete this.leaflet;
		}
		// This is where we wire up and initialize the leaflet control.
		this.connectLeafletPrototype();
		if (this.leaflet)
		{
			// The map is already initialized.
			this.log.error(`Leaflet going to ${this.options.LeafletDestinationAddress} is already initialized!`);
			return false;
		}

		let libLeaflet = this._leafletPrototype;
		// Note the leaflet destination address is not a browser address but just the text of the ID
		this.leaflet = libLeaflet.map(this.options.LeafletDestinationAddress);

		this.leaflet.setView(this.leafletInitialCenter, this.leafletInitialZoom);

		this.onAfterInitializeLeaflet();

		return true;
	}

	onAfterInitializeLeaflet()
	{

	}
}

module.exports = PictSectionLeaflet;

module.exports.default_configuration = require('./Pict-Section-Leaflet-DefaultConfiguration.json');
