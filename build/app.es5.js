"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var com;
(function (com) {
    var linfaxin;
    (function (linfaxin) {
        var gankwebapp;
        (function (gankwebapp) {
            var R;
            (function (R) {
                R.id = {
                    "drawerLayout": "drawerLayout",
                    "btn_menu": "btn_menu",
                    "indicator": "indicator",
                    "viewPager": "viewPager",
                    "progressBar": "progressBar",
                    "title": "title",
                    "summary": "summary",
                    "imageView": "imageView"
                };
            })(R = gankwebapp.R || (gankwebapp.R = {}));
        })(gankwebapp = linfaxin.gankwebapp || (linfaxin.gankwebapp = {}));
    })(linfaxin = com.linfaxin || (com.linfaxin = {}));
})(com || (com = {}));
var com;
(function (com) {
    var linfaxin;
    (function (linfaxin) {
        var gankwebapp;
        (function (gankwebapp) {
            var R;
            (function (R) {
                var NetImage = androidui.image.NetImage;
                var data = {
                    "icon_github": [null, null, null, "data:image/png;base64,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"],
                    "icon_menu": [null, null, null, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAeFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVyEiIAAAAJ3RSTlMAWHDo4NAF9fEzDQHuyqaKZ1dPQCH62MW9t62RfnheRCkWoJxGLBoc2TUIAAAAy0lEQVRo3u3XWa7CQAxEUSeEzsAUkjBPj8fg/e+QNVxLCCTqLKDroy1bZSIiIiLyaU3X5kT2MGQ5dWqewPtD6dwRBLQeMAMBCw+oyBd4wIbMUOVcbkAdmKKJEdfFGNl2ExORX9Pk23VBzG5/RuwcK0nC3QP2IODkAQUIOHrAiNwbD/g3YO9YVRuQDitn1r0xQ4ZcdDFFvlCquwxY9ldDLoVDqwNZFs/pmwvI2QM231QCz++usU3p3MmAnifskhHDfISM22QiIiIi8jkvE8irSqK9lGYAAAAASUVORK5CYII="]
                };
                var imageCache = {
                    icon_github: null,
                    icon_menu: null
                };
                function findRatioImage(array) {
                    if (array[window.devicePixelRatio]) return new NetImage(array[window.devicePixelRatio], window.devicePixelRatio);
                    for (var i = array.length; i >= 0; i--) {
                        if (array[i]) {
                            return new NetImage(array[i], i);
                        }
                    }
                    throw Error('Not find radio image. May something error in build.');
                }

                var image_base64 = function () {
                    function image_base64() {
                        _classCallCheck(this, image_base64);
                    }

                    _createClass(image_base64, null, [{
                        key: "icon_github",
                        get: function get() {
                            return imageCache.icon_github || (imageCache.icon_github = findRatioImage(data.icon_github));
                        }
                    }, {
                        key: "icon_menu",
                        get: function get() {
                            return imageCache.icon_menu || (imageCache.icon_menu = findRatioImage(data.icon_menu));
                        }
                    }]);

                    return image_base64;
                }();

                R.image_base64 = image_base64;
            })(R = gankwebapp.R || (gankwebapp.R = {}));
        })(gankwebapp = linfaxin.gankwebapp || (linfaxin.gankwebapp = {}));
    })(linfaxin = com.linfaxin || (com.linfaxin = {}));
})(com || (com = {}));
var com;
(function (com) {
    var linfaxin;
    (function (linfaxin) {
        var gankwebapp;
        (function (gankwebapp) {
            var R;
            (function (R) {
                var NetDrawable = androidui.image.NetDrawable;

                var image = function () {
                    function image() {
                        _classCallCheck(this, image);
                    }

                    _createClass(image, null, [{
                        key: "icon_github",
                        get: function get() {
                            return new NetDrawable(R.image_base64.icon_github);
                        }
                    }, {
                        key: "icon_menu",
                        get: function get() {
                            return new NetDrawable(R.image_base64.icon_menu);
                        }
                    }]);

                    return image;
                }();

                R.image = image;
                android.content.res.Resources.buildDrawableFinder = function (refString) {
                    return image[refString];
                };
            })(R = gankwebapp.R || (gankwebapp.R = {}));
        })(gankwebapp = linfaxin.gankwebapp || (linfaxin.gankwebapp = {}));
    })(linfaxin = com.linfaxin || (com.linfaxin = {}));
})(com || (com = {}));
var com;
(function (com) {
    var linfaxin;
    (function (linfaxin) {
        var gankwebapp;
        (function (gankwebapp) {
            var R;
            (function (R) {
                var _layout_data = {
                    "activity_main": "<android.support.v4.widget.drawerlayout id=\"drawerLayout\">\n    <framelayout>\n        <linearlayout android:layout_width=\"match_parent\" android:layout_height=\"40dp\">\n            <imageview android:state_pressed=\"background:#ddd\" android:layout_width=\"40dp\" android:drawablealpha=\"200\" android:layout_height=\"match_parent\" android:src=\"@drawable/icon_menu\" id=\"btn_menu\">\n            </imageview>\n            <android.view.view android:background=\"#ddd\" android:layout_width=\"1px\" android:layout_height=\"match_parent\"></android.view.view>\n            <horizontalscrollview android:scrollbars=\"none\" android:layout_width=\"match_parent\" android:layout_height=\"match_parent\">\n                    <com.linfaxin.gankwebapp.view.borderbottompagerindicator android:layout_width=\"wrap_content\" android:layout_height=\"match_parent\" id=\"indicator\">\n                    </com.linfaxin.gankwebapp.view.borderbottompagerindicator>\n            </horizontalscrollview>\n        </linearlayout>\n        <android.view.view android:background=\"#ddd\" android:layout_margintop=\"40dp\" android:layout_width=\"match_parent\" android:layout_height=\"1px\">\n        </android.view.view>\n        <android.support.v4.view.viewpager android:layout_margintop=\"40dp\" android:layout_width=\"match_parent\" android:layout_height=\"match_parent\" id=\"viewPager\">\n        </android.support.v4.view.viewpager>\n        <progressbar android:layout_gravity=\"center\" android:layout_width=\"wrap_content\" android:layout_height=\"wrap_content\" id=\"progressBar\"></progressbar>\n    </framelayout>\n\n    <!--侧滑内容-->\n    <linearlayout android:layout_gravity=\"left\" android:background=\"white\" android:padding=\"8dp\" android:orientation=\"vertical\" android:gravity=\"center\" android:layout_width=\"240dp\" android:clickable=\"true\" android:layout_height=\"match_parent\">\n        <textview android:layout_margintop=\"12dp\" android:text=\"干货gank.io\" onclick=\"window.open('http://gank.io/')\" android:layout_width=\"wrap_content\" android:textsize=\"20sp\"></textview>\n        <textview android:textcolor=\"#999\" android:text=\"第三方社区版WebApp\" android:layout_width=\"wrap_content\" android:textsize=\"12sp\"></textview>\n        <textview onclick=\"window.open('https://github.com/linfaxin/GankWebApp')\" android:layout_margintop=\"20dp\" android:state_pressed=\"background:#ddd\" android:layout_width=\"wrap_content\" android:padding=\"8dp\" android:textcolor=\"#999\" android:gravity=\"center\" android:text=\"欢迎Star&amp;PR :)\" android:drawabletop=\"@drawable/icon_github\"></textview>\n        <linearlayout android:layout_margin=\"12dp\" android:layout_height=\"match_parent\" android:layout_width=\"wrap_content\" android:gravity=\"bottom\">\n            <textview onclick=\"window.open('https://github.com/linfaxin/AndroidUI-WebApp')\" android:state_pressed=\"background:#ccc\" android:background=\"#eee\" android:padding=\"8dp\" android:textcolor=\"#999\" android:text=\"由AndroidUI框架驱动\"></textview>\n        </linearlayout>\n    </linearlayout>\n\n</android.support.v4.widget.drawerlayout>",
                    "day_detail_list_item": "<linearlayout android:background=\"white\" android:state_pressed=\"background:#ddd\" android:padding=\"8dp 8dp 8dp 24dp\" android:layout_width=\"match_parent\" android:layout_height=\"match_parent\" android:orientation=\"vertical\">\n    <textview android:maxLines=\"3\" android:ellipsize=\"end\" android:textSize=\"14sp\" id=\"title\"></textview>\n    <textview android:layout_marginTop=\"6dp\" android:textColor=\"#999\" android:textSize=\"12sp\" id=\"summary\"></textview>\n</linearlayout>",
                    "main_list_item": "<linearlayout android:padding=\"8dp\" android:layout_width=\"match_parent\" android:layout_height=\"match_parent\">\n    <imageview android:scaleType=\"centerCrop\" android:layout_height=\"35vw\" android:layout_width=\"35vw\" id=\"imageView\"></imageview>\n    <linearlayout android:layout_marginLeft=\"12dp\" android:layout_height=\"match_parent\" android:gravity=\"center\" android:orientation=\"vertical\">\n        <textview android:maxLines=\"3\" android:ellipsize=\"end\" android:textSize=\"18sp\" id=\"title\"></textview>\n        <textview android:layout_marginTop=\"4dp\" android:textColor=\"#999\" android:textSize=\"12sp\" id=\"summary\"></textview>\n    </linearlayout>\n</linearlayout>"
                };
                var _tempDiv = document.createElement('div');

                var layout = function () {
                    function layout() {
                        _classCallCheck(this, layout);
                    }

                    _createClass(layout, null, [{
                        key: "getLayoutData",
                        value: function getLayoutData(layoutRef) {
                            if (!layoutRef) return null;
                            layoutRef = layoutRef.replace('/', '.').split('.').pop();
                            if (!_layout_data[layoutRef]) return null;
                            _tempDiv.innerHTML = _layout_data[layoutRef];
                            var data = _tempDiv.firstElementChild;
                            _tempDiv.removeChild(data);
                            return data;
                        }
                    }]);

                    return layout;
                }();

                layout.activity_main = '@layout/activity_main';
                layout.day_detail_list_item = '@layout/day_detail_list_item';
                layout.main_list_item = '@layout/main_list_item';
                R.layout = layout;
                android.content.res.Resources.buildLayoutFinder = function (refString) {
                    return layout.getLayoutData(refString);
                };
            })(R = gankwebapp.R || (gankwebapp.R = {}));
        })(gankwebapp = linfaxin.gankwebapp || (linfaxin.gankwebapp = {}));
    })(linfaxin = com.linfaxin || (com.linfaxin = {}));
})(com || (com = {}));
var com;
(function (com) {
    var linfaxin;
    (function (linfaxin) {
        var gankwebapp;
        (function (gankwebapp) {
            var ActionBarActivity = android.app.ActionBarActivity;
            var ProgressBar = android.widget.ProgressBar;
            var FrameLayout = android.widget.FrameLayout;
            var Toast = android.widget.Toast;
            var TextView = android.widget.TextView;
            var ExpandableListView = android.widget.ExpandableListView;
            var BaseExpandableListAdapter = android.widget.BaseExpandableListAdapter;
            var ImageView = android.widget.ImageView;

            var DayDetailActivity = function (_ActionBarActivity) {
                _inherits(DayDetailActivity, _ActionBarActivity);

                function DayDetailActivity() {
                    _classCallCheck(this, DayDetailActivity);

                    return _possibleConstructorReturn(this, Object.getPrototypeOf(DayDetailActivity).apply(this, arguments));
                }

                _createClass(DayDetailActivity, [{
                    key: "onCreate",
                    value: function onCreate(savedInstanceState) {
                        var _this2 = this;

                        _get(Object.getPrototypeOf(DayDetailActivity.prototype), "onCreate", this).call(this, savedInstanceState);
                        var activity = this;
                        this.date = this.getIntent().getStringExtra(DayDetailActivity.Extra_Date);
                        if (!this.date) {
                            this.finish();
                            return;
                        }
                        this.setTitle(this.date);
                        this.date = this.date.replace('-', '/').replace('-', '/');
                        var pd = new ProgressBar(this);
                        this.setContentView(pd, new FrameLayout.LayoutParams(-2, -2, android.view.Gravity.CENTER));
                        setTimeout(function () {
                            fetch('http://gank.avosapps.com/api/day/' + _this2.date).then(function (response) {
                                return response.json();
                            }).then(function (json) {
                                _this2.initPage(json.results);
                            }).catch(function (e) {
                                console.error(e);
                                Toast.makeText(activity, '载入失败', Toast.LENGTH_SHORT).show();
                            });
                        }, 300);
                    }
                }, {
                    key: "initPage",
                    value: function initPage(mapData) {
                        var _this3 = this;

                        var activity = this;
                        var fuliArray = mapData['福利'];
                        delete mapData['福利'];
                        var adapter = new DetailAdapter(mapData);
                        var list = new ExpandableListView(this);
                        if (fuliArray) {
                            (function () {
                                var fuli = fuliArray[0];
                                var imageView = new ImageView(_this3);
                                imageView.setScaleType(ImageView.ScaleType.CENTER_CROP);
                                imageView.setLayoutParams(new android.widget.AbsListView.LayoutParams(-1, _this3.getResources().getDisplayMetrics().widthPixels * 0.8));
                                imageView.setImageURI(fuli.url);
                                imageView.setOnClickListener({
                                    onClick: function onClick(view) {
                                        activity.startActivity(new android.content.Intent('com.linfaxin.gankwebapp.PhotoActivity').putExtra('url', fuli.url));
                                    }
                                });
                                list.addHeaderView(imageView);
                            })();
                        }
                        list.setExpandableAdapter(adapter);
                        for (var i = 0, count = adapter.getGroupCount(); i < count; i++) {
                            list.expandGroup(i);
                        }
                        this.setContentView(list);
                    }
                }]);

                return DayDetailActivity;
            }(ActionBarActivity);

            DayDetailActivity.Extra_Title = 'title';
            DayDetailActivity.Extra_Date = 'date';
            gankwebapp.DayDetailActivity = DayDetailActivity;

            var DetailAdapter = function (_BaseExpandableListAd) {
                _inherits(DetailAdapter, _BaseExpandableListAd);

                function DetailAdapter(mapData) {
                    _classCallCheck(this, DetailAdapter);

                    var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(DetailAdapter).call(this));

                    _this4.data = new Map();
                    for (var key in mapData) {
                        _this4.data.set(key, mapData[key]);
                    }
                    return _this4;
                }

                _createClass(DetailAdapter, [{
                    key: "getGroupCount",
                    value: function getGroupCount() {
                        return this.data.size;
                    }
                }, {
                    key: "getChildrenCount",
                    value: function getChildrenCount(groupPosition) {
                        return Array.from(this.data.values())[groupPosition].length;
                    }
                }, {
                    key: "getGroup",
                    value: function getGroup(groupPosition) {
                        return Array.from(this.data.keys())[groupPosition];
                    }
                }, {
                    key: "getChild",
                    value: function getChild(groupPosition, childPosition) {
                        return Array.from(this.data.values())[groupPosition][childPosition];
                    }
                }, {
                    key: "getGroupId",
                    value: function getGroupId(groupPosition) {
                        return -1;
                    }
                }, {
                    key: "getChildId",
                    value: function getChildId(groupPosition, childPosition) {
                        return -1;
                    }
                }, {
                    key: "hasStableIds",
                    value: function hasStableIds() {
                        return false;
                    }
                }, {
                    key: "isChildSelectable",
                    value: function isChildSelectable(groupPosition, childPosition) {
                        return false;
                    }
                }, {
                    key: "getGroupView",
                    value: function getGroupView(groupPosition, isExpanded, convertView, parent) {
                        var groupTitle = this.getGroup(groupPosition);
                        if (!isExpanded) groupTitle = '+ ' + groupTitle;
                        var density = parent.getResources().getDisplayMetrics().density;
                        var textView = convertView || new TextView(parent.getContext());
                        textView.setTextSize(18);
                        textView.setText(groupTitle);
                        textView.setPadding(16 * density, 16 * density, 16 * density, 16 * density);
                        return textView;
                    }
                }, {
                    key: "getChildView",
                    value: function getChildView(groupPosition, childPosition, isLastChild, convertView, parent) {
                        var item = this.getChild(groupPosition, childPosition);
                        convertView = convertView || android.view.View.inflate(parent.getContext(), gankwebapp.R.layout.day_detail_list_item);
                        convertView.findViewById(gankwebapp.R.id.title).setText(item.desc);
                        convertView.findViewById(gankwebapp.R.id.summary).setText(item.who);
                        convertView.setOnClickListener({
                            onClick: function onClick() {
                                window.open(item.url);
                            }
                        });
                        return convertView;
                    }
                }]);

                return DetailAdapter;
            }(BaseExpandableListAdapter);
        })(gankwebapp = linfaxin.gankwebapp || (linfaxin.gankwebapp = {}));
    })(linfaxin = com.linfaxin || (com.linfaxin = {}));
})(com || (com = {}));
var com;
(function (com) {
    var linfaxin;
    (function (linfaxin) {
        var gankwebapp;
        (function (gankwebapp) {
            var Activity = android.app.Activity;
            var R = com.linfaxin.gankwebapp.R;
            var Toast = android.widget.Toast;

            var MainActivity = function (_Activity) {
                _inherits(MainActivity, _Activity);

                function MainActivity() {
                    _classCallCheck(this, MainActivity);

                    return _possibleConstructorReturn(this, Object.getPrototypeOf(MainActivity).apply(this, arguments));
                }

                _createClass(MainActivity, [{
                    key: "onCreate",
                    value: function onCreate(savedInstanceState) {
                        var _this6 = this;

                        _get(Object.getPrototypeOf(MainActivity.prototype), "onCreate", this).call(this, savedInstanceState);
                        var activity = this;
                        this.setTitle('首页');
                        this.setContentView(R.layout.activity_main);
                        var progressBar = this.findViewById(R.id.progressBar);
                        this.initAllDayTitle().then(function () {
                            _this6.initViewPager();
                        }, function () {
                            Toast.makeText(_this6, '标题数据获取失败', Toast.LENGTH_SHORT).show();
                            _this6.initViewPager();
                        });
                        var drawerLayout = this.findViewById(R.id.drawerLayout);
                        var btn_menu = this.findViewById(R.id.btn_menu);
                        btn_menu.setOnClickListener({
                            onClick: function onClick(view) {
                                if (drawerLayout.isDrawerOpen(android.view.Gravity.LEFT)) {
                                    drawerLayout.closeDrawers();
                                } else {
                                    drawerLayout.openDrawer(android.view.Gravity.LEFT);
                                }
                            }
                        });
                    }
                }, {
                    key: "initAllDayTitle",
                    value: function initAllDayTitle() {
                        return new Promise(function (resolve, reject) {
                            fetch("http://faxnode.duapp.com/gank_history").then(function (response) {
                                return response.json();
                            }).then(function (json) {
                                for (var key in json) {
                                    MainActivity.AllDataTitle.set(key, json[key]);
                                }
                                resolve();
                            }).catch(function (ex) {
                                console.error(ex);
                                reject();
                            });
                        });
                    }
                }, {
                    key: "initViewPager",
                    value: function initViewPager() {
                        var progressBar = this.findViewById(R.id.progressBar);
                        progressBar.getParent().removeView(progressBar);
                        var viewPager = this.findViewById(R.id.viewPager);
                        viewPager.setAdapter(new gankwebapp.view.GankPagerAdapter(viewPager));
                        var indicator = this.findViewById(R.id.indicator);
                        indicator.bindViewPager(viewPager);
                        indicator.checkFirstChild();
                    }
                }]);

                return MainActivity;
            }(Activity);

            MainActivity.AllDataTitle = new Map();
            gankwebapp.MainActivity = MainActivity;
        })(gankwebapp = linfaxin.gankwebapp || (linfaxin.gankwebapp = {}));
    })(linfaxin = com.linfaxin || (com.linfaxin = {}));
})(com || (com = {}));
var com;
(function (com) {
    var linfaxin;
    (function (linfaxin) {
        var gankwebapp;
        (function (gankwebapp) {
            var Activity = android.app.Activity;
            var PhotoView = uk.co.senab.photoview.PhotoView;

            var PhotoActivity = function (_Activity2) {
                _inherits(PhotoActivity, _Activity2);

                function PhotoActivity() {
                    _classCallCheck(this, PhotoActivity);

                    return _possibleConstructorReturn(this, Object.getPrototypeOf(PhotoActivity).apply(this, arguments));
                }

                _createClass(PhotoActivity, [{
                    key: "onCreate",
                    value: function onCreate(savedInstanceState) {
                        _get(Object.getPrototypeOf(PhotoActivity.prototype), "onCreate", this).call(this, savedInstanceState);
                        var enterAnim = android.R.anim.grow_fade_in_center;
                        enterAnim.setDuration(500);
                        var exitAnim = android.R.anim.shrink_fade_out_center;
                        exitAnim.setDuration(500);
                        this.getWindow().setWindowAnimations(enterAnim, exitAnim, null, null);
                        this.getWindow().setFloating(true);
                        var photo = new PhotoView(this);
                        photo.setImageURI(this.getIntent().getStringExtra('url'));
                        this.setContentView(photo);
                        var activity = this;
                        photo.setOnPhotoTapListener({
                            onPhotoTap: function onPhotoTap() {
                                activity.finish();
                            }
                        });
                    }
                }]);

                return PhotoActivity;
            }(Activity);

            gankwebapp.PhotoActivity = PhotoActivity;
        })(gankwebapp = linfaxin.gankwebapp || (linfaxin.gankwebapp = {}));
    })(linfaxin = com.linfaxin || (com.linfaxin = {}));
})(com || (com = {}));
var com;
(function (com) {
    var linfaxin;
    (function (linfaxin) {
        var gankwebapp;
        (function (gankwebapp) {
            var view;
            (function (view) {
                var View = android.view.View;
                var LinearLayout = android.widget.LinearLayout;
                var Gravity = android.view.Gravity;
                var Color = android.graphics.Color;
                var Paint = android.graphics.Paint;
                var ViewPager = android.support.v4.view.ViewPager;
                var RadioGroup = android.widget.RadioGroup;
                var CompoundButton = android.widget.CompoundButton;
                var RadioButton = android.widget.RadioButton;

                var BorderBottomPagerIndicator = function (_RadioGroup) {
                    _inherits(BorderBottomPagerIndicator, _RadioGroup);

                    function BorderBottomPagerIndicator(context, bindElement, defStyle) {
                        _classCallCheck(this, BorderBottomPagerIndicator);

                        var _this8 = _possibleConstructorReturn(this, Object.getPrototypeOf(BorderBottomPagerIndicator).call(this, context, bindElement, defStyle));

                        _this8.mPosition = 0;
                        _this8.mPositionOffset = 0;
                        _this8.bottomLinePaint = new Paint();
                        _this8.mBottomIndicatorLeft = 0;
                        _this8.mBottomIndicatorRight = 0;
                        _this8.colorNormal = 0xff999999;
                        _this8.colorChecked = 0xff000000;
                        _this8.colorBottomLine = 0xff666666;
                        _this8.tempRect = new android.graphics.Rect();
                        _this8.setOrientation(LinearLayout.HORIZONTAL);
                        _this8.setGravity(Gravity.CENTER);
                        _this8.setMinimumHeight(40 * _this8.getResources().getDisplayMetrics().density);
                        _this8.bottomLinePaint.setColor(_this8.colorBottomLine);
                        _this8.setWillNotDraw(false);
                        _get(Object.getPrototypeOf(BorderBottomPagerIndicator.prototype), "setOnCheckedChangeListener", _this8).call(_this8, {
                            onCheckedChanged: function onCheckedChanged(group, checkedId) {
                                group.invalidate();
                                var cb = group.findViewById(checkedId);
                                if (cb != null) {
                                    if (group.viewPager != null) {
                                        group.viewPager.setCurrentItem(group.indexOfChild(cb));
                                    }
                                }
                                cb.getDrawingRect(group.tempRect);
                                group.tempRect.left -= group.tempRect.width() / 2;
                                group.tempRect.right += group.tempRect.width() / 2;
                                cb.requestRectangleOnScreen(group.tempRect);
                                if (group.onCheckedChangedListener != null) {
                                    group.onCheckedChangedListener.onCheckedChanged(group, checkedId);
                                }
                            }
                        });
                        return _this8;
                    }

                    _createClass(BorderBottomPagerIndicator, [{
                        key: "addRadioBtns",
                        value: function addRadioBtns() {
                            for (var _len = arguments.length, btns = Array(_len), _key = 0; _key < _len; _key++) {
                                btns[_key] = arguments[_key];
                            }

                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;

                            try {
                                for (var _iterator = btns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var s = _step.value;

                                    if (s == null) continue;
                                    this.addRadioBtn(s);
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return) {
                                        _iterator.return();
                                    }
                                } finally {
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }
                        }
                    }, {
                        key: "addRadioBtn",
                        value: function addRadioBtn(text) {
                            var id = arguments.length <= 1 || arguments[1] === undefined ? View.NO_ID : arguments[1];

                            var radioButton = new RadioButton(this.getContext());
                            if (id == View.NO_ID) {
                                id = text + radioButton.hashCode();
                            }
                            radioButton.setId(id);
                            radioButton.setText(text);
                            radioButton.setTextSize(15);
                            radioButton.setButtonDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
                            var pad = this.getResources().getDisplayMetrics().density * 8;
                            radioButton.setPadding(pad, pad, pad, pad);
                            radioButton.setMinWidth(0);
                            radioButton.setGravity(Gravity.CENTER);
                            radioButton.setBackgroundDrawable(android.R.drawable.item_background);
                            var textColor = new android.content.res.ColorStateList([[View.VIEW_STATE_CHECKED], []], [this.colorChecked, this.colorNormal]);
                            radioButton.setTextColor(textColor);
                            this.addView(radioButton, new RadioGroup.LayoutParams(0, -1, 1));
                        }
                    }, {
                        key: "setOnCheckedChangeListener",
                        value: function setOnCheckedChangeListener(listener) {
                            this.onCheckedChangedListener = listener;
                        }
                    }, {
                        key: "checkFirstChild",
                        value: function checkFirstChild() {
                            for (var i = 0, size = this.getChildCount(); i < size; i++) {
                                if (this.getChildAt(i) instanceof CompoundButton) {
                                    this.getChildAt(i).setChecked(true);
                                    return;
                                }
                            }
                        }
                    }, {
                        key: "getBottomIndicatorRight",
                        value: function getBottomIndicatorRight() {
                            return this.mBottomIndicatorRight;
                        }
                    }, {
                        key: "getBottomIndicatorLeft",
                        value: function getBottomIndicatorLeft() {
                            return this.mBottomIndicatorLeft;
                        }
                    }, {
                        key: "getBottomIndicatorWidth",
                        value: function getBottomIndicatorWidth() {
                            return this.mBottomIndicatorRight - this.mBottomIndicatorLeft;
                        }
                    }, {
                        key: "onDraw",
                        value: function onDraw(canvas) {
                            var itemWidth = this.getWidth() / this.getChildCount();
                            var leftOffset = 0;
                            var linePadding = this.getResources().getDisplayMetrics().density * 6;
                            try {
                                var cb = this.getCurrentCB();
                                var positionOffsetFix = this.mPosition - this.indexOfChild(cb) + this.mPositionOffset;
                                leftOffset = cb.getLeft() + cb.getWidth() * positionOffsetFix;
                                itemWidth = cb.getWidth();
                                linePadding = (itemWidth - cb.getPaint().measureText(cb.getText().toString())) / 2 - linePadding;
                            } catch (e) {}
                            this.mBottomIndicatorLeft = leftOffset + linePadding;
                            this.mBottomIndicatorRight = leftOffset + itemWidth - linePadding;
                            canvas.drawRect(this.mBottomIndicatorLeft, this.getHeight() - this.getResources().getDisplayMetrics().density * 4, this.mBottomIndicatorRight, this.getHeight(), this.bottomLinePaint);
                        }
                    }, {
                        key: "getCBChild",
                        value: function getCBChild(index) {
                            try {
                                return this.getChildAt(index);
                            } catch (e) {
                                console.warn(e);
                            }
                            return null;
                        }
                    }, {
                        key: "getCurrentCB",
                        value: function getCurrentCB() {
                            try {
                                return this.findViewById(this.getCheckedRadioButtonId());
                            } catch (e) {
                                console.warn(e);
                            }
                            return null;
                        }
                    }, {
                        key: "bindViewPager",
                        value: function bindViewPager(viewPager) {
                            this.viewPager = viewPager;
                            viewPager.addOnPageChangeListener(this);
                            var adapter = viewPager.getAdapter();
                            if (adapter) {
                                for (var i = 0, count = adapter.getCount(); i < count; i++) {
                                    var title = adapter.getPageTitle(i);
                                    if (title) this.addRadioBtn(title);
                                }
                            }
                        }
                    }, {
                        key: "onPageSelected",
                        value: function onPageSelected(position) {
                            this.invalidate();
                            try {
                                this.getCBChild(position).setChecked(true);
                            } catch (e) {
                                console.warn(e);
                            }
                        }
                    }, {
                        key: "onPageScrolled",
                        value: function onPageScrolled(position, positionOffset, positionOffsetPixels) {
                            this.mPosition = position;
                            this.mPositionOffset = positionOffset;
                            this.invalidate();
                        }
                    }, {
                        key: "onPageScrollStateChanged",
                        value: function onPageScrollStateChanged(state) {
                            if (state == ViewPager.SCROLL_STATE_IDLE) {
                                this.mPositionOffset = 0;
                                this.mPosition = this.viewPager.getCurrentItem();
                                this.invalidate();
                            }
                        }
                    }]);

                    return BorderBottomPagerIndicator;
                }(RadioGroup);

                view.BorderBottomPagerIndicator = BorderBottomPagerIndicator;
            })(view = gankwebapp.view || (gankwebapp.view = {}));
        })(gankwebapp = linfaxin.gankwebapp || (linfaxin.gankwebapp = {}));
    })(linfaxin = com.linfaxin || (com.linfaxin = {}));
})(com || (com = {}));
var com;
(function (com) {
    var linfaxin;
    (function (linfaxin) {
        var gankwebapp;
        (function (gankwebapp) {
            var view;
            (function (view_1) {
                var View = android.view.View;
                var BaseAdapter = android.widget.BaseAdapter;
                var R = com.linfaxin.gankwebapp.R;

                var GankCategoryAdapter = function (_BaseAdapter) {
                    _inherits(GankCategoryAdapter, _BaseAdapter);

                    function GankCategoryAdapter() {
                        var _Object$getPrototypeO;

                        _classCallCheck(this, GankCategoryAdapter);

                        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                            args[_key2] = arguments[_key2];
                        }

                        var _this9 = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(GankCategoryAdapter)).call.apply(_Object$getPrototypeO, [this].concat(args)));

                        _this9.data = [];
                        return _this9;
                    }

                    _createClass(GankCategoryAdapter, [{
                        key: "getView",
                        value: function getView(position, convertView, parent) {
                            if (convertView == null) {
                                convertView = View.inflate(parent.getContext(), R.layout.main_list_item, null);
                            }
                            var item = this.getItem(position);
                            var day = item.publishedAt.split('T')[0];
                            convertView.findViewById(R.id.title).setText(item.desc);
                            convertView.findViewById(R.id.summary).setText(day + ' ' + item.who);
                            convertView.findViewById(R.id.imageView).setVisibility(View.GONE);
                            convertView.setOnClickListener({
                                onClick: function onClick(view) {
                                    window.open(item.url);
                                }
                            });
                            return convertView;
                        }
                    }, {
                        key: "getCount",
                        value: function getCount() {
                            return this.data.length;
                        }
                    }, {
                        key: "getItem",
                        value: function getItem(position) {
                            return this.data[position];
                        }
                    }, {
                        key: "getItemId",
                        value: function getItemId(position) {
                            return -1;
                        }
                    }]);

                    return GankCategoryAdapter;
                }(BaseAdapter);

                view_1.GankCategoryAdapter = GankCategoryAdapter;
            })(view = gankwebapp.view || (gankwebapp.view = {}));
        })(gankwebapp = linfaxin.gankwebapp || (linfaxin.gankwebapp = {}));
    })(linfaxin = com.linfaxin || (com.linfaxin = {}));
})(com || (com = {}));
var com;
(function (com) {
    var linfaxin;
    (function (linfaxin) {
        var gankwebapp;
        (function (gankwebapp) {
            var view;
            (function (view_2) {
                var View = android.view.View;
                var BaseAdapter = android.widget.BaseAdapter;
                var R = com.linfaxin.gankwebapp.R;

                var GankFuliListAdapter = function (_BaseAdapter2) {
                    _inherits(GankFuliListAdapter, _BaseAdapter2);

                    function GankFuliListAdapter() {
                        var _Object$getPrototypeO2;

                        _classCallCheck(this, GankFuliListAdapter);

                        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                            args[_key3] = arguments[_key3];
                        }

                        var _this10 = _possibleConstructorReturn(this, (_Object$getPrototypeO2 = Object.getPrototypeOf(GankFuliListAdapter)).call.apply(_Object$getPrototypeO2, [this].concat(args)));

                        _this10.data = [];
                        return _this10;
                    }

                    _createClass(GankFuliListAdapter, [{
                        key: "getView",
                        value: function getView(position, convertView, parent) {
                            if (convertView == null) {
                                convertView = View.inflate(parent.getContext(), R.layout.main_list_item, null);
                            }
                            var item = this.getItem(position);
                            var day = item.publishedAt.split('T')[0];
                            convertView.findViewById(R.id.title).setText(gankwebapp.MainActivity.AllDataTitle.get(day) || '暂无标题');
                            convertView.findViewById(R.id.summary).setText(day);
                            convertView.findViewById(R.id.imageView).setImageURI(item.url);
                            convertView.setOnClickListener({
                                onClick: function onClick(view) {
                                    var activity = view.getContext();
                                    activity.startActivity(new android.content.Intent('com.linfaxin.gankwebapp.DayDetailActivity').putExtra(gankwebapp.DayDetailActivity.Extra_Date, day));
                                }
                            });
                            return convertView;
                        }
                    }, {
                        key: "getCount",
                        value: function getCount() {
                            return this.data.length;
                        }
                    }, {
                        key: "getItem",
                        value: function getItem(position) {
                            return this.data[position];
                        }
                    }, {
                        key: "getItemId",
                        value: function getItemId(position) {
                            return -1;
                        }
                    }]);

                    return GankFuliListAdapter;
                }(BaseAdapter);

                view_2.GankFuliListAdapter = GankFuliListAdapter;
            })(view = gankwebapp.view || (gankwebapp.view = {}));
        })(gankwebapp = linfaxin.gankwebapp || (linfaxin.gankwebapp = {}));
    })(linfaxin = com.linfaxin || (com.linfaxin = {}));
})(com || (com = {}));
var com;
(function (com) {
    var linfaxin;
    (function (linfaxin) {
        var gankwebapp;
        (function (gankwebapp) {
            var view;
            (function (view_3) {
                var PagerAdapter = android.support.v4.view.PagerAdapter;
                var ListView = android.widget.ListView;
                var PullRefreshLoadLayout = androidui.widget.PullRefreshLoadLayout;

                var GankPagerAdapter = function (_PagerAdapter) {
                    _inherits(GankPagerAdapter, _PagerAdapter);

                    function GankPagerAdapter(viewPager) {
                        _classCallCheck(this, GankPagerAdapter);

                        var _this11 = _possibleConstructorReturn(this, Object.getPrototypeOf(GankPagerAdapter).call(this));

                        _this11.views = [];
                        _this11.pageShowedFlags = [];
                        _this11.viewPager = viewPager;
                        var adapter = _this11;
                        viewPager.addOnPageChangeListener({
                            onPageScrolled: function onPageScrolled(position, positionOffset, positionOffsetPixels) {
                                if (adapter.pageShowedFlags[position]) return;
                                adapter.pageShowedFlags[position] = true;
                                adapter.getView(position);
                                adapter.views[position].setFooterState(PullRefreshLoadLayout.State_Footer_Normal);
                                adapter.views[position].setFooterState(PullRefreshLoadLayout.State_Footer_Loading);
                            },
                            onPageSelected: function onPageSelected(position) {},
                            onPageScrollStateChanged: function onPageScrollStateChanged(state) {}
                        });
                        return _this11;
                    }

                    _createClass(GankPagerAdapter, [{
                        key: "getView",
                        value: function getView(position) {
                            var prll = this.views[position];
                            if (!prll) {
                                prll = new PullRefreshLoadLayout(this.viewPager.getContext());
                                var listView = new ListView(this.viewPager.getContext());
                                prll.addView(listView, -1, -1);
                                var isFuli = position == 0;
                                var adapter = isFuli ? new view_3.GankFuliListAdapter() : new view_3.GankCategoryAdapter();
                                listView.setAdapter(adapter);
                                if (position > 0) {
                                    prll.setFooterState(PullRefreshLoadLayout.State_Footer_Loading);
                                }
                                prll.setRefreshLoadListener(new view_3.GankRefreshLoadListener(GankPagerAdapter.PagerCategory[position], adapter));
                                this.views[position] = prll;
                            }
                            return prll;
                        }
                    }, {
                        key: "getCount",
                        value: function getCount() {
                            return GankPagerAdapter.PagerCategory.length;
                        }
                    }, {
                        key: "instantiateItem",
                        value: function instantiateItem(container, position) {
                            var prll = this.getView(position);
                            container.addView(prll, 0);
                            return prll;
                        }
                    }, {
                        key: "destroyItem",
                        value: function destroyItem(container, position, object) {
                            container.removeView(object);
                        }
                    }, {
                        key: "isViewFromObject",
                        value: function isViewFromObject(view, object) {
                            return view == object;
                        }
                    }, {
                        key: "getItemPosition",
                        value: function getItemPosition(object) {
                            return this.views.indexOf(object);
                        }
                    }, {
                        key: "getPageTitle",
                        value: function getPageTitle(position) {
                            return GankPagerAdapter.PagerTitle[position];
                        }
                    }]);

                    return GankPagerAdapter;
                }(PagerAdapter);

                GankPagerAdapter.PagerCategory = ['福利', 'Android', 'iOS', 'App', '前端', '瞎推荐', '拓展资源', '休息视频'];
                GankPagerAdapter.PagerTitle = ['每日', 'Android', 'iOS', 'App', '前端', '瞎推荐', '拓展资源', '休息视频'];
                view_3.GankPagerAdapter = GankPagerAdapter;
            })(view = gankwebapp.view || (gankwebapp.view = {}));
        })(gankwebapp = linfaxin.gankwebapp || (linfaxin.gankwebapp = {}));
    })(linfaxin = com.linfaxin || (com.linfaxin = {}));
})(com || (com = {}));
var com;
(function (com) {
    var linfaxin;
    (function (linfaxin) {
        var gankwebapp;
        (function (gankwebapp) {
            var view;
            (function (view) {
                var PullRefreshLoadLayout = androidui.widget.PullRefreshLoadLayout;
                var Toast = android.widget.Toast;

                var GankRefreshLoadListener = function () {
                    function GankRefreshLoadListener(category, adapter) {
                        _classCallCheck(this, GankRefreshLoadListener);

                        this.nextLoadingPage = 1;
                        this.category = category;
                        this.adapter = adapter;
                    }

                    _createClass(GankRefreshLoadListener, [{
                        key: "onRefresh",
                        value: function onRefresh(prll) {
                            var _this12 = this;

                            this.nextLoadingPage = 1;
                            this.loadNextPage(prll.getContext()).then(function (items) {
                                _this12.adapter.data = items;
                                _this12.adapter.notifyDataSetChanged();
                                prll.setHeaderState(PullRefreshLoadLayout.State_Header_Normal);
                                prll.setFooterState(PullRefreshLoadLayout.State_Footer_Normal);
                            }, function () {
                                prll.setHeaderState(PullRefreshLoadLayout.State_Header_RefreshFail);
                            });
                        }
                    }, {
                        key: "onLoadMore",
                        value: function onLoadMore(prll) {
                            var _this13 = this;

                            this.loadNextPage(prll.getContext()).then(function (items) {
                                var _adapter$data;

                                (_adapter$data = _this13.adapter.data).push.apply(_adapter$data, _toConsumableArray(items));
                                _this13.adapter.notifyDataSetChanged();
                                if (items.length == GankRefreshLoadListener.ListLoadCount) {
                                    prll.setFooterState(PullRefreshLoadLayout.State_Footer_Normal);
                                } else {
                                    prll.setFooterState(PullRefreshLoadLayout.State_Footer_NoMoreToLoad);
                                }
                            }, function () {
                                prll.setFooterState(PullRefreshLoadLayout.State_Footer_LoadFail);
                            });
                        }
                    }, {
                        key: "loadNextPage",
                        value: function loadNextPage(context) {
                            var _this14 = this;

                            var activity = this;
                            return new Promise(function (resolve, reject) {
                                fetch("http://gank.avosapps.com/api/data/" + encodeURIComponent(_this14.category) + "/" + GankRefreshLoadListener.ListLoadCount + "/" + _this14.nextLoadingPage).then(function (response) {
                                    return response.json();
                                }).then(function (json) {
                                    resolve(json.results);
                                    _this14.nextLoadingPage++;
                                }).catch(function (ex) {
                                    console.error(ex);
                                    Toast.makeText(context, '载入失败', Toast.LENGTH_SHORT).show();
                                    reject();
                                });
                            });
                        }
                    }]);

                    return GankRefreshLoadListener;
                }();

                GankRefreshLoadListener.ListLoadCount = 20;
                view.GankRefreshLoadListener = GankRefreshLoadListener;
            })(view = gankwebapp.view || (gankwebapp.view = {}));
        })(gankwebapp = linfaxin.gankwebapp || (linfaxin.gankwebapp = {}));
    })(linfaxin = com.linfaxin || (com.linfaxin = {}));
})(com || (com = {}));
//# sourceMappingURL=app.js.map

//# sourceMappingURL=app.es5.js.map