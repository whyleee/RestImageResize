//>>built
require({cache:{"url:epi/cms/contentediting/templates/ExpirationDialog.html":"<div class=\"epi-formContainer\">\r\n    <div data-dojo-type=\"epi.cms.widget.Breadcrumb\" data-dojo-attach-point=\"breadcrumb\" data-dojo-props=\"showCurrentNode: false\"></div>\r\n    <h1 data-dojo-attach-point=\"contentNameNode\" class=\"epi-breadCrumbsCurrentItem dijitInline dojoxEllipsis\"></h1>\r\n    <div data-dojo-attach-point=\"stateNode\" class=\"epi-notificationBar epi-notificationBarItem\">\r\n        <div class=\"epi-notificationBarText\" data-dojo-attach-point=\"infoTextNode\"></div>\r\n        <div class=\"epi-notificationBarButtonContainer\">\r\n            <button data-dojo-type=\"dijit.form.Button\" data-dojo-attach-point=\"removeButton\" data-dojo-attach-event=\"onClick: _onRemoveButtonClick\">${res.removebutton}</button>\r\n        </div>\r\n    </div>\r\n    <div data-dojo-type=\"dijit.form.Form\" class=\"epi-formArea\" data-dojo-attach-point=\"form\"></div>\r\n</div>"}});define("epi/cms/contentediting/ExpirationDialog",["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dijit/_CssStateMixin","epi/cms/widget/Breadcrumb","epi/shell/widget/dialog/_DialogContentMixin","epi/shell/widget/FormContainer","epi/shell/widget/_ModelBindingMixin","epi/shell/widget/_ActionProviderWidget","dojo/text!./templates/ExpirationDialog.html","epi/i18n!epi/cms/nls/shell.common.buttons","epi/i18n!epi/cms/nls/episerver.cms.widget.expirationeditor"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c){return _1("epi.cms.contentediting.ExpirationDialog",[_7,_9,_6,_4,_8],{templateString:_a,res:_c,contentLink:null,contentName:null,baseClass:"epi-statusIndicator",modelBindingMap:{"contentLink":["contentLink"],"contentName":["contentName"],"infoText":["infoText"],"state":["state"],"enableSaveButton":["enableSaveButton"],"enableArchiveLink":["enableArchiveLink"],"showRemoveButton":["showRemoveButton"]},_archiveLinkSelector:null,_setContentLinkAttr:function(_d){this.breadcrumb.set("contentLink",_d);},_setContentNameAttr:{node:"contentNameNode",type:"innerHTML"},_setInfoTextAttr:{node:"infoTextNode",type:"innerHTML"},_setEnableSaveButtonAttr:function(_e){if(this._actions&&this._actions.length){this.setActionProperty("save","disabled",!_e);}},_setEnableArchiveLinkAttr:function(_f){if(this._archiveLinkSelector&&!this._archiveLinkSelector._keepReadOnly){this._archiveLinkSelector.set("readOnly",!_f);}},_setShowRemoveButtonAttr:function(_10){_3.set(this.removeButton.domNode,"display",_10?"":"none");},_onRemoveButtonClick:function(){var _11={stopPublish:null,archiveLink:null};this.set("value",_11);this.onChange(_11);},onFieldCreated:function(_12,_13){if(_12==="stopPublish"){_13.set("minimumValue",this.model.get("minimumExpireDate"));_13.set("minimumValueMessage",this.model.get("minimumExpireDateMessage"));}else{if(_12==="archiveLink"){this._archiveLinkSelector=_13;if(this._archiveLinkSelector.readOnly){this._archiveLinkSelector._keepReadOnly=true;}else{this._archiveLinkSelector.set("readOnly",!this.model.get("enableArchiveLink"));}this._archiveLinkSelector.set("contentLink",this.model.get("contentLink"));this._archiveLinkSelector.set("canSelectOwnerContent",false);}}},onChange:function(_14){this.inherited(arguments);this.model.set("intermediateValue",_14);},getActions:function(){this._actions=[{name:"save",label:_b.save,settings:{type:"button",disabled:true},action:_2.hitch(this,function(){if(this.validate()){this.executeDialog();}})},{name:"cancel",label:_b.cancel,settings:{type:"button"},action:_2.hitch(this,function(){this.cancelDialog();})}];return this._actions;}});});