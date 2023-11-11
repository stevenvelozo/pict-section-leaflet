const libPictViewClass = require('pict-view');

class PictSectionLeaflet extends libPictViewClass
{
	constructor(pFable, pOptions, pServiceHash)
	{
		let tmpOptions = Object.assign({}, require('./Pict-Section-Leaflet-DefaultConfiguration.json'), pOptions);

		super(pFable, tmpOptions, pServiceHash);

		this.initialRenderComplete = false;
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
			this._tuiGridPrototype = pLeafletPrototype;
		}
		else
		{
			this.log.trace(`PICT-Leaflet No Leaflet Prototype defined or explicitly set; looking for it in the window object.`);
			if (typeof (window) != 'undefined')
			{
				if (typeof (window.leaflet) != 'undefined')
				{
					this.log.trace(`PICT-Leaflet Found Leaflet Prototype in window.tuiGrid.`);
					this.connectLeafletPrototype(window.tui.Grid);
				}
				else
				{
					this.log.error(`PICT-Leaflet No Leaflet Prototype found in window.tuiGrid.`);
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

	changeHandler(pChangeData)
	{
		let tmpSolverNecessary = false;


		if (tmpSolverNecessary)
		{
			this.services.PictApplication.solve();
		}
	}

	onAfterRender()
	{
		if (!this.initialRenderComplete)
		{
			this.onAfterInitialRender();
			this.initialRenderComplete = true;
		}
	}

	onAfterInitialRender()
	{
		// This is where we wire up and initialize the leaflet control -- the initial render has put the placeholder content in place.
		// Check for a leaflet prototype, and find it in the window object it if it doesn't exist
		if (!this._leafletPrototype)
		{
			this.connectLeafletPrototype();
		}
		// This is where we wire up and initialize the leaflet control
		if (this.leaflet)
		{
			// The map is already initialized.
			this.log.error(`Leaflet going to ${this.options.LeafletDestinationAddress} is already initialized!`);
			return false;
		}

		let libLeaflet = this._leafletPrototype;
		this.leaflet = new libLeaflet();

		return true;
	}
}

module.exports = PictSectionLeaflet;

module.exports.default_configuration = require('./Pict-Section-Leaflet-DefaultConfiguration.json');