/**
 * Created by linfaxin on 16/2/14.
 */

///<reference path="../androidui-sdk/android-ui.d.ts"/>
///<reference path="../gen/R/layout.ts"/>

module com.linfaxin.gankwebapp {
    import Activity = android.app.Activity;
    import ActionBarActivity = android.app.ActionBarActivity;
    import FrameLayout = android.widget.FrameLayout;
    import ImageView = android.widget.ImageView;
    import PhotoView = uk.co.senab.photoview.PhotoView;
    
    export class PhotoActivity extends ActionBarActivity{
        protected onCreate(savedInstanceState?:android.os.Bundle):void {
            super.onCreate(savedInstanceState);

            this.setTitle('图片')

            let photo = new PhotoView(this);
	        photo.setImageURI(this.getIntent().getStringExtra('url'));
            this.setContentView(photo);

        }

    }
}