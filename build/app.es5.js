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
                    "prll": "prll",
                    "listView": "listView",
                    "imageView": "imageView",
                    "title": "title",
                    "summary": "summary"
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
                    "icon_github": [null, null, null, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFEUlEQVR42t1ba2gUVxSOm2yb7BqVGk0o1EJaE63+iIIVHy0KPkpphKLYoAWVllhBFgTr40+ghUCqRMRaCqU0UagUfyaERKtFghGUNlBKiZWqoLaigtRXYtS4/Q6cgel2Zvaee2d27+TH9yM7cx7fl5k7995zbkk2my0pBurr3pwCvMGYUqw8oiaZAJYArcAPQD/wJzAMZHMwzNf6+d5Wtk3ESgAkXA68B3wL3PIgKsUt9kU+y60VAMnVAd8DD0Mg7YeHHKPOGgGQTA3wNfA0QuK5eMoxa4omAIJXAp9H/B9XeSIoh8qCCoCAK4HbRSSeC8plZUEEQKAM8Mwi8g4op0xkAsB5EvjGQuK5oByToQoAh1XAmRiQd0C5VoUiABxNBoZiRN4B5TzZSAA4KAV6Y0jeAeVeaiJAe4zJO2jXEgCGm8cBeQebRQLAYBHwOI/T58DrwAxgKXAQ+LsAZG4Ch4C3gVc5h+d5bIjLIiUB+L1XGfQGfVZ/HwLXIyB+g30nPOIOKg6KpSoCNCsmtC/g9akAWlzT5DHgN6CDf98ObADeYWzg3+jad3zvM9cy+TMgFRBvn2LOzYEC4IY0P2IqzjYqfEJfBt4ivxozzhS/Wq8o3LtR8PqkgwRoETySa4q1i+MhwBpB3i2eAuDCdOCBwNEqiwRYJcibOE73EqBNOChlLBIgI8y9zUuAS0InxywS4Jgw90v/EQA/zNb4LJ2zSIBzGvnPdguwR8PBCosEWKGR/x63AFIFj9hC3iXCEZ0nmAyrFaaSbtxRXWsXWIAqzk2VB3GuJsMmoXK7bSPvEmG3kEsTGe0SGi23WIDlQi67SngVJzGaarEAU4VcDpLRccmKzFbyLhFuCPgcJ4OzAoOeGAjQI+BzlgyuCAw6YiBAh4DPFTIYERh0xUCALgGfETK4JzAYiIEAAwI+98jgssDgYgwEuCjgc5kMzgursUmLySeF1erz0lFzvE2EenQWEfstFmC/dFGnMxUesliAIZ2p8EKNtfR6C8l/oMFjIRmWCTdDs9zOlrSI/AvCCZ2zOVrmOOjTUK/NIgG+0Mi/z70jtFezXLXTAvKfaua+1y1ALZevdBxR2aqsCMTLOLZOzsS1NndbvNugcPkL0FBA8g0cUzffbq+6wGqfmy8Aa7l42ZunQ+wU8H5QIdOA9ETO46cQKs2rvQSY4FMc+cNdoOQG5msKLWu/co/vVmC+pOmZH+8lXPE5Cvxu8Ir+ryhCXP2Ko9t8jIjwAtd9M4SNkieEAiQ0ix0q2BZUHabmiJ8DuiwWu+5dBowqBLwLTNNsvh4OmfxgbpOEV+D5Ae/5X8BLrnvXKTyaRw3e+84QyY+5n+J8PUIHVCdA+PvjqKbNsN0RogCHJU1SNOJe9XH0KLdNnQesw9wkNcpjxmn+clQUuObnhet+TZNBwecGbJd96WMzIeRPX00I5B8EzVFUOi/8DkJ8VIAJT3kIHeTvmvYKNwc432lyWEEhdoWhAJ+E1S0e1Dx1H/gKmOeIwROZ1/hgRcJAgJQB+ZawzwtsAZ4oBB7N+YyaDIJpDeIUf1MkJ0Z4VP5HmFDKcP4viUWTrmVRH5mZI9x7TxsIUCmIQ92l9YU6NPUijwuPFRKrNBBgkoL/Yd7Q0dqiMx2lZwI/5klwUoQCnKTBtugnR5FEo48QY4ZjQNpnrUGxGq07O4ykZtEskT+N9CXoDMFnJ/u6z75nWX96nEfvVIj+aD4wMYpc/wVhd5UCbJ7djwAAAABJRU5ErkJggg=="]
                };
                var imageCache = {
                    icon_github: null
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
                    "activity_main": "<android.support.v4.widget.drawerlayout>\n    <androidui.widget.pullrefreshloadlayout android:layout_width=\"match_parent\" android:layout_height=\"match_parent\" id=\"prll\">\n        <listview id=\"listView\">\n        </listview>\n    </androidui.widget.pullrefreshloadlayout>\n\n    <!--侧滑内容-->\n    <linearlayout android:layout_gravity=\"left\" android:background=\"white\" android:padding=\"8dp\" android:orientation=\"vertical\" android:gravity=\"center\" android:layout_width=\"240dp\" android:clickable=\"true\" android:layout_height=\"match_parent\">\n        <textview android:layout_margintop=\"60dp\" android:text=\"干货gank.io\" onclick=\"window.open('http://gank.io/')\" android:layout_width=\"wrap_content\" android:textsize=\"20sp\"></textview>\n        <textview android:textcolor=\"#999\" android:text=\"第三方社区版WebApp\" android:layout_width=\"wrap_content\" android:textsize=\"12sp\"></textview>\n        <textview onclick=\"window.location.href = 'https://github.com/linfaxin/GankWebApp'\" android:layout_margintop=\"20dp\" android:state_pressed=\"background:#ddd\" android:layout_width=\"wrap_content\" android:padding=\"8dp\" android:textcolor=\"#666\" android:gravity=\"center\" android:text=\"欢迎Star&amp;PR: \" android:drawableright=\"@drawable/icon_github\"></textview>\n        <linearlayout android:layout_margin=\"12dp\" android:layout_height=\"match_parent\" android:layout_width=\"wrap_content\" android:gravity=\"bottom\">\n            <textview onclick=\"window.location.href = 'https://github.com/linfaxin/AndroidUI-WebApp'\" android:state_pressed=\"background:#ccc\" android:background=\"#eee\" android:padding=\"8dp\" android:textcolor=\"#999\" android:text=\"由AndroidUI框架驱动\"></textview>\n        </linearlayout>\n    </linearlayout>\n\n</android.support.v4.widget.drawerlayout>",
                    "main_list_item": "<linearlayout android:padding=\"8dp\" android:layout_width=\"match_parent\" android:layout_height=\"match_parent\">\n    <imageview android:scaleType=\"centerCrop\" android:layout_height=\"35vw\" android:layout_width=\"35vw\" id=\"imageView\"></imageview>\n    <linearlayout android:layout_marginLeft=\"12dp\" android:layout_height=\"match_parent\" android:gravity=\"center\" android:orientation=\"vertical\">\n        <textview android:maxLines=\"3\" android:ellipsize=\"end\" android:textSize=\"18sp\" id=\"title\"></textview>\n        <textview android:layout_marginTop=\"4dp\" android:textSize=\"12sp\" id=\"summary\"></textview>\n    </linearlayout>\n</linearlayout>"
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
            var View = android.view.View;
            var BaseAdapter = android.widget.BaseAdapter;
            var PullRefreshLoadLayout = androidui.widget.PullRefreshLoadLayout;
            var R = com.linfaxin.gankwebapp.R;
            var Toast = android.widget.Toast;

            var MainActivity = function (_ActionBarActivity) {
                _inherits(MainActivity, _ActionBarActivity);

                function MainActivity() {
                    var _Object$getPrototypeO;

                    _classCallCheck(this, MainActivity);

                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(MainActivity)).call.apply(_Object$getPrototypeO, [this].concat(args)));

                    _this.nextLoadingPage = 1;
                    return _this;
                }

                _createClass(MainActivity, [{
                    key: "onCreate",
                    value: function onCreate() {
                        var _this2 = this;

                        _get(Object.getPrototypeOf(MainActivity.prototype), "onCreate", this).call(this);
                        this.setTitle('首页');
                        this.setContentView(R.layout.activity_main);
                        this.listView = this.findViewById('listView');
                        this.adapter = new MyListAdapter();
                        this.listView.setAdapter(this.adapter);
                        this.initAllDayTitle().then(function () {
                            _this2.initPRLL();
                        }, function () {
                            Toast.makeText(_this2, '标题数据获取失败', Toast.LENGTH_SHORT).show();
                            _this2.initPRLL();
                        });
                    }
                }, {
                    key: "initAllDayTitle",
                    value: function initAllDayTitle() {
                        return new Promise(function (resolve, reject) {
                            resolve();
                        });
                    }
                }, {
                    key: "initPRLL",
                    value: function initPRLL() {
                        this.prll = this.findViewById('prll');
                        var activity = this;
                        this.prll.setRefreshLoadListener({
                            onRefresh: function onRefresh(prll) {
                                activity.nextLoadingPage = 1;
                                activity.loadNextPage().then(function (items) {
                                    activity.adapter.data = items;
                                    activity.adapter.notifyDataSetChanged();
                                    activity.prll.setHeaderState(PullRefreshLoadLayout.State_Header_Normal);
                                    activity.prll.setFooterState(PullRefreshLoadLayout.State_Footer_Normal);
                                }, function () {
                                    activity.prll.setHeaderState(PullRefreshLoadLayout.State_Header_RefreshFail);
                                });
                            },
                            onLoadMore: function onLoadMore(prll) {
                                activity.loadNextPage().then(function (items) {
                                    var _activity$adapter$dat;

                                    (_activity$adapter$dat = activity.adapter.data).push.apply(_activity$adapter$dat, _toConsumableArray(items));
                                    activity.adapter.notifyDataSetChanged();
                                    if (items.length == MainActivity.ListLoadCount) {
                                        activity.prll.setFooterState(PullRefreshLoadLayout.State_Footer_Normal);
                                    } else {
                                        activity.prll.setFooterState(PullRefreshLoadLayout.State_Footer_NoMoreToLoad);
                                    }
                                }, function () {
                                    activity.prll.setFooterState(PullRefreshLoadLayout.State_Footer_LoadFail);
                                });
                            }
                        });
                        activity.prll.setFooterState(PullRefreshLoadLayout.State_Footer_Normal);
                        activity.prll.setFooterState(PullRefreshLoadLayout.State_Footer_Loading);
                    }
                }, {
                    key: "loadNextPage",
                    value: function loadNextPage() {
                        var _this3 = this;

                        var activity = this;
                        return new Promise(function (resolve, reject) {
                            fetch("http://gank.avosapps.com/api/data/福利/" + MainActivity.ListLoadCount + "/" + _this3.nextLoadingPage).then(function (response) {
                                return response.json();
                            }).then(function (json) {
                                resolve(json.results);
                                _this3.nextLoadingPage++;
                            }).catch(function (ex) {
                                console.error(ex);
                                Toast.makeText(activity, '载入失败', Toast.LENGTH_SHORT).show();
                                reject();
                            });
                        });
                    }
                }]);

                return MainActivity;
            }(ActionBarActivity);

            MainActivity.ListLoadCount = 20;
            MainActivity.AllDataTitle = new Map();
            gankwebapp.MainActivity = MainActivity;

            var MyListAdapter = function (_BaseAdapter) {
                _inherits(MyListAdapter, _BaseAdapter);

                function MyListAdapter() {
                    var _Object$getPrototypeO2;

                    _classCallCheck(this, MyListAdapter);

                    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                        args[_key2] = arguments[_key2];
                    }

                    var _this4 = _possibleConstructorReturn(this, (_Object$getPrototypeO2 = Object.getPrototypeOf(MyListAdapter)).call.apply(_Object$getPrototypeO2, [this].concat(args)));

                    _this4.data = [];
                    return _this4;
                }

                _createClass(MyListAdapter, [{
                    key: "getView",
                    value: function getView(position, convertView, parent) {
                        if (convertView == null) {
                            convertView = View.inflate(parent.getContext(), R.layout.main_list_item, null);
                        }
                        var item = this.getItem(position);
                        convertView.findViewById(R.id.imageView).setImageURI(item.url);
                        var day = item.publishedAt.split('T')[0];
                        convertView.findViewById(R.id.title).setText(MainActivity.AllDataTitle.get(day) || '暂无标题');
                        convertView.findViewById(R.id.summary).setText(day);
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

                return MyListAdapter;
            }(BaseAdapter);
        })(gankwebapp = linfaxin.gankwebapp || (linfaxin.gankwebapp = {}));
    })(linfaxin = com.linfaxin || (com.linfaxin = {}));
})(com || (com = {}));
//# sourceMappingURL=app.js.map

//# sourceMappingURL=app.es5.js.map