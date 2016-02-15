///<reference path="../../androidui-sdk/android-ui.d.ts"/>
module com.linfaxin.gankwebapp.R {
    import NetImage = androidui.image.NetImage;

    //index=ratio, index-0 alway null, index-3 = @x3
    var data = {
        "icon_github": [
                null,
                null,
                null,
                "data:image/png;base64,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"
        ],
        "icon_menu": [
                null,
                null,
                null,
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAABxUlEQVR42u3bvyuFURzH8Ut+lJIMSgalLMpCslmuGMWClAwWFq5JljszGOwGi0HKalAGi7AopUzXeBe6EsVyfJ5c/4Cu3M+396n3P3Bew/N8n/OcXEopR/8XmwAAAAQAAAQAAAQAAAQAAAQAAAQAAAQAAAQAAAQAAAQAAAQAAL+tQ02pVVUwa10tqEFXgFn1nGKsI9XkBNCn3lKsVXQCWE7x1o0TwE5AgBcngLmAABdOAO2qEgxgze0taEQ9Bdn8Q9XgOAd0qV11a9qZmlaNTMJMwgQAAAQAAAQAAAQAAFTvAG1qQ52rB/VoVkldq3014AhwGuhL6HutEf568ycDngecOAFsBgQoOQEUAwKUnQCGAgIcuD2EjwNt/qsadgPIfmTaUx/mm3+vxpwHsV41b9p4rc+CmYT5FEEAAEBsAgAAEAAAUHCAFjWqZgyn4OyOQ151uwJMVI/23Ndn9ZuW1e/pPSnODcmfVXACWAp4HnDpBLAdEKDiBLAYEODKCaAzxbuoveX2FpQPhJD949TsOAf0p+8bhmXT7tSKamUSZhImAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAOq8L8lFlFv9HJHHAAAAAElFTkSuQmCC"
        ]
};
    var imageCache = {
        icon_github:null,
        icon_menu:null
    };

    function findRatioImage(array:string[]):NetImage {
        if(array[window.devicePixelRatio]) return new NetImage(array[window.devicePixelRatio], window.devicePixelRatio);
        for(let i=array.length; i>=0; i--){
            if(array[i]){
                return new NetImage(array[i], i);
            }
        }
        throw Error('Not find radio image. May something error in build.')
    }
    export class image_base64{
        static get icon_github(){
            return imageCache.icon_github || (imageCache.icon_github=findRatioImage(data.icon_github));
        }
        static get icon_menu(){
            return imageCache.icon_menu || (imageCache.icon_menu=findRatioImage(data.icon_menu));
        }

    }
}