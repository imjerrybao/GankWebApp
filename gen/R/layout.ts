///<reference path="../../androidui-sdk/android-ui.d.ts"/>
module com.linfaxin.gankwebapp.R {
    const _layout_data = {
        "activity_main": "<android.support.v4.widget.drawerlayout id=\"drawerLayout\">\n    <framelayout>\n        <linearlayout android:layout_width=\"match_parent\" android:layout_height=\"40dp\">\n            <imageview android:state_pressed=\"background:#ddd\" android:layout_width=\"40dp\" android:drawablealpha=\"200\" android:layout_height=\"match_parent\" android:src=\"@drawable/icon_menu\" id=\"btn_menu\">\n            </imageview>\n            <android.view.view android:background=\"#ddd\" android:layout_width=\"1px\" android:layout_height=\"match_parent\"></android.view.view>\n            <horizontalscrollview android:scrollbars=\"none\" android:layout_width=\"match_parent\" android:layout_height=\"match_parent\">\n                    <com.linfaxin.gankwebapp.view.borderbottompagerindicator android:layout_width=\"wrap_content\" android:layout_height=\"match_parent\" id=\"indicator\">\n                    </com.linfaxin.gankwebapp.view.borderbottompagerindicator>\n            </horizontalscrollview>\n        </linearlayout>\n        <android.view.view android:background=\"#ddd\" android:layout_margintop=\"40dp\" android:layout_width=\"match_parent\" android:layout_height=\"1px\">\n        </android.view.view>\n        <android.support.v4.view.viewpager android:layout_margintop=\"40dp\" android:layout_width=\"match_parent\" android:layout_height=\"match_parent\" id=\"viewPager\">\n        </android.support.v4.view.viewpager>\n        <progressbar android:layout_gravity=\"center\" android:layout_width=\"wrap_content\" android:layout_height=\"wrap_content\" id=\"progressBar\"></progressbar>\n    </framelayout>\n\n    <!--侧滑内容-->\n    <linearlayout android:layout_gravity=\"left\" android:background=\"white\" android:padding=\"8dp\" android:orientation=\"vertical\" android:gravity=\"center\" android:layout_width=\"240dp\" android:clickable=\"true\" android:layout_height=\"match_parent\">\n        <textview android:layout_margintop=\"12dp\" android:text=\"干货gank.io\" onclick=\"window.open('http://gank.io/')\" android:layout_width=\"wrap_content\" android:textsize=\"20sp\"></textview>\n        <textview android:textcolor=\"#999\" android:text=\"第三方社区版WebApp\" android:layout_width=\"wrap_content\" android:textsize=\"12sp\"></textview>\n        <textview onclick=\"window.open('https://github.com/linfaxin/GankWebApp')\" android:layout_margintop=\"20dp\" android:state_pressed=\"background:#ddd\" android:layout_width=\"wrap_content\" android:padding=\"8dp\" android:textcolor=\"#999\" android:gravity=\"center\" android:text=\"欢迎Star&amp;PR :)\" android:drawabletop=\"@drawable/icon_github\"></textview>\n        <linearlayout android:layout_margin=\"12dp\" android:layout_height=\"match_parent\" android:layout_width=\"wrap_content\" android:gravity=\"bottom\">\n            <textview onclick=\"window.open('https://github.com/linfaxin/AndroidUI-WebApp')\" android:state_pressed=\"background:#ccc\" android:background=\"#eee\" android:padding=\"8dp\" android:textcolor=\"#999\" android:text=\"由AndroidUI框架驱动\"></textview>\n        </linearlayout>\n    </linearlayout>\n\n</android.support.v4.widget.drawerlayout>",
        "day_detail_list_item": "<linearlayout android:background=\"white\" android:state_pressed=\"background:#ddd\" android:padding=\"8dp 8dp 8dp 24dp\" android:layout_width=\"match_parent\" android:layout_height=\"match_parent\" android:orientation=\"vertical\">\n    <textview android:maxLines=\"3\" android:ellipsize=\"end\" android:textSize=\"14sp\" id=\"title\"></textview>\n    <textview android:layout_marginTop=\"6dp\" android:textColor=\"#999\" android:textSize=\"12sp\" id=\"summary\"></textview>\n</linearlayout>",
        "main_list_item": "<linearlayout android:padding=\"8dp\" android:layout_width=\"match_parent\" android:layout_height=\"match_parent\">\n    <imageview android:scaleType=\"centerCrop\" android:layout_height=\"35vw\" android:layout_width=\"35vw\" id=\"imageView\"></imageview>\n    <linearlayout android:layout_marginLeft=\"12dp\" android:layout_height=\"match_parent\" android:gravity=\"center\" android:orientation=\"vertical\">\n        <textview android:maxLines=\"3\" android:ellipsize=\"end\" android:textSize=\"18sp\" id=\"title\"></textview>\n        <textview android:layout_marginTop=\"4dp\" android:textColor=\"#999\" android:textSize=\"12sp\" id=\"summary\"></textview>\n    </linearlayout>\n</linearlayout>"
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
        static day_detail_list_item = '@layout/day_detail_list_item';
        static main_list_item = '@layout/main_list_item';
    }
    android.content.res.Resources.buildLayoutFinder = (refString:string)=>{
        return layout.getLayoutData(refString)
    }
}