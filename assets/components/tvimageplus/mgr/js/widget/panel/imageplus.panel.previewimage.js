ImagePlus.panel.PreviewImage = function(config) {
    config = config || {};
    /**
     * Config defaults
     */
    Ext.apply(config,{
        border: false
        ,id: 'imageplus-panel-previewimage'
        ,listeners: {
            afterrender: {fn:this.onAfterRender,scope:this}
        }
    });
    ImagePlus.panel.PreviewImage.superclass.constructor.call(this,config);
    
};
Ext.extend(ImagePlus.panel.PreviewImage,Ext.Panel,{

    onAfterRender: function(){
        this.img = document.createElement('img');
        this.img.className = 'imageplus-previewimage';
        this.img.width = 300;
        this.img.style.width="300px";
        this.body.appendChild(this.img);
        this.img.onerror = function(ths){return function(){
            ths.onImageDoesNotExist();
        }}(this)
    },

    setSrc: function(src){
        this.img.src = src
        this.img.style.display="block";
    },

    onImageDoesNotExist: function(){
        this.img.style.display="none";
    }

});
Ext.reg('imageplus-panel-previewimage',ImagePlus.panel.PreviewImage);