//>>built
require({cache:{"url:epi/cms/widget/templates/ContentTypeGroup.html":"<div class=\"epi-listingContainer\" data-dojo-attach-point=\"focusNode\" tabIndex=\"${tabIndex}\">\r\n    <h2 data-dojo-attach-point=\"titleNode\" class=\"epi-ribbonHeader\"></h2>\r\n    <ul data-dojo-attach-point=\"containerNode\" class=\"epi-advancedListing\"></ul>\r\n</div>"}});define("epi/cms/widget/ContentTypeGroup",["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-style","dojo/text!./templates/ContentTypeGroup.html","dijit/_TemplatedMixin","dijit/layout/_LayoutWidget","epi/cms/widget/ContentType","dojo/keys","dijit/_KeyNavContainer"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a){return _1("epi.cms.widget.ContentTypeGroup",[_7,_6,_a],{title:"",contentTypes:null,templateString:_5,buildRendering:function(){this.inherited(arguments);},postCreate:function(){this.inherited(arguments);this.render();this.connectKeyNavHandlers(this.isLeftToRight()?[_9.LEFT_ARROW,_9.UP_ARROW]:[_9.RIGHT_ARROW,_9.DOWN_ARROW],this.isLeftToRight()?[_9.RIGHT_ARROW,_9.DOWN_ARROW]:[_9.LEFT_ARROW,_9.UP_ARROW]);},render:function(){this.clear();_3.forEach(this.contentTypes,function(_b){var _c=new _8({contentType:_b});this.connect(_c,"onSelect",this.onSelect);this.addChild(_c);},this);},clear:function(){_3.forEach(this.getChildren(),function(_d){this.removeChild(_d);_d.destroyRecursive();},this);},_setTitleAttr:{node:"titleNode",type:"innerText"},_setContentTypesAttr:function(_e){this._set("contentTypes",_e);if(this._created){this.render();}},onSelect:function(){},setVisibility:function(_f){var _10=(_f?"block":"none");_4.set(this.domNode,"display",_10);}});});