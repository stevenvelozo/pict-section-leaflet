const libPictView = require('pict-view');

const _ViewConfiguration = (
{
	ViewIdentifier: "Postcard-MainApplication",

	DefaultRenderable: "Postcard-Main-Application",
    DefaultDestinationAddress: "#Postcard-Content-Container",

	AutoRender: true,

	CSS: ".PostcardControls { margin-top: 2em; background-color: #fff5f5; }",

	Templates: [
		{
			Hash: "Postcard-Main-Application-Template",
			Template: /*html*/`
<!-- This template is where the Form Metacontroller view puts its content -->
<div class="header">
	<h1>Postcard to a Long-Lost Friend</h1>    
</div>
<div class="content">
    <p>Dearest Friend,</p>

    <p>It’s been ages since we last shared a moment together. I often think of those days when we’d laugh till dusk, sharing dreams and fears as if tomorrow would never come. Life has taken us far apart, yet somehow I feel as close to you in spirit as ever.</p>

    <p>How are you? Do you still walk down that old path by the river, where we’d skip stones and tell secrets to the wind? I sometimes catch myself looking down that road, hoping to see you come round the bend, smiling and waving as if no time had passed.</p>

    <p>The world has changed so much, yet in my heart, you remain just as you were—strong, kind, and filled with that spark that I admired so deeply. I hope life has been gentle with you and that you’ve found happiness.</p>

    <p>If this postcard ever finds its way to you, know that I carry your memory with me always, like a treasured keepsake tucked safely in my heart.</p>

    <p class="signature">With all my love and warmest thoughts,<br>Your Friend</p>
</div>
`
		}
	],
	Renderables: [
		{
			RenderableHash: "Postcard-Main-Application",
			TemplateHash: "Postcard-Main-Application-Template"
		}]
});

class PostcardMainApplicationView extends libPictView
{
	constructor(pFable, pOptions, pServiceHash)
	{
		super(pFable, pOptions, pServiceHash);
	}

	onAfterInitialize()
	{
		this.pict.views.PostcardNavigation.render()
		return super.onAfterInitialize();
	}

	onAfterRender()
	{
		return super.onAfterRender();
	}
}

module.exports = PostcardMainApplicationView;

module.exports.default_configuration = _ViewConfiguration;
