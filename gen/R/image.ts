///<reference path="../../androidui-sdk/android-ui.d.ts"/>
///<reference path="image_base64.ts"/>
module com.linfaxin.gankwebapp.R {
    import NetDrawable = androidui.image.NetDrawable;
    import NinePatchDrawable = androidui.image.NinePatchDrawable;

    export class image{

        static get icon_github(){return new NetDrawable(image_base64.icon_github)}
    }
    android.content.res.Resources.buildDrawableFinder = (refString:string)=>{
        return image[refString];
    }
}