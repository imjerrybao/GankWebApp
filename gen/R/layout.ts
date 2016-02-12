///<reference path="../../androidui-sdk/android-ui.d.ts"/>
module com.linfaxn.gankwebapp.R {
    const _layout_data = {
        "activity_main": "<androidui.widget.pullrefreshloadlayout android:layout_width=\"match_parent\" android:layout_height=\"match_parent\" id=\"prll\">\n    <listview id=\"listView\">\n    </listview>\n</androidui.widget.pullrefreshloadlayout>",
        "main_list_item": "<linearlayout android:padding=\"8dp\" android:layout_width=\"match_parent\" android:layout_height=\"match_parent\">\n    <imageview android:scaleType=\"centerCrop\" android:layout_height=\"35vw\" android:layout_width=\"35vw\" id=\"imageView\"></imageview>\n    <linearlayout android:layout_marginLeft=\"12dp\" android:layout_height=\"match_parent\" android:gravity=\"center\" android:orientation=\"vertical\">\n        <textview android:maxLines=\"3\" android:ellipsize=\"end\" android:textSize=\"18sp\" id=\"title\"></textview>\n        <textview android:layout_marginTop=\"4dp\" android:textSize=\"12sp\" id=\"summary\"></textview>\n    </linearlayout>\n</linearlayout>"
};
    const _tempDiv = document.createElement('div');

    export class layout{
        static getLayoutData(layoutRef:string):HTMLElement{
            if(!layoutRef) return null;
            layoutRef = layoutRef.replace('/', '.').split('.').pop();
            if(!_layout_data[layoutRef]) return null;
            _tempDiv.innerHTML = _layout_data[layoutRef];
            let data = <HTMLElement>_tempDiv.firstElementChild;
            _tempDiv.removeChild(data);
            return data;
        }
        
        static activity_main = '@layout/activity_main';
        static main_list_item = '@layout/main_list_item';
    }
    android.content.res.Resources.buildLayoutFinder = (refString:string)=>{
        return layout.getLayoutData(refString)
    }
}