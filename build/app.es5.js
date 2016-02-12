"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var com;
(function (com) {
    var linfaxn;
    (function (linfaxn) {
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
        })(gankwebapp = linfaxn.gankwebapp || (linfaxn.gankwebapp = {}));
    })(linfaxn = com.linfaxn || (com.linfaxn = {}));
})(com || (com = {}));
var com;
(function (com) {
    var linfaxn;
    (function (linfaxn) {
        var gankwebapp;
        (function (gankwebapp) {
            var R;
            (function (R) {
                var _layout_data = {
                    "activity_main": "<androidui.widget.pullrefreshloadlayout android:layout_width=\"match_parent\" android:layout_height=\"match_parent\" id=\"prll\">\n    <listview id=\"listView\">\n    </listview>\n</androidui.widget.pullrefreshloadlayout>",
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
        })(gankwebapp = linfaxn.gankwebapp || (linfaxn.gankwebapp = {}));
    })(linfaxn = com.linfaxn || (com.linfaxn = {}));
})(com || (com = {}));
var com;
(function (com) {
    var linfaxn;
    (function (linfaxn) {
        var gankwebapp;
        (function (gankwebapp) {
            var ActionBarActivity = android.app.ActionBarActivity;
            var View = android.view.View;
            var BaseAdapter = android.widget.BaseAdapter;
            var PullRefreshLoadLayout = androidui.widget.PullRefreshLoadLayout;
            var R = com.linfaxn.gankwebapp.R;
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
                        this.setTitle('干货集中营');
                        this.setContentView(R.layout.activity_main);
                        var listView = this.findViewById('listView');
                        this.adapter = new MyListAdapter();
                        listView.setAdapter(this.adapter);
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
        })(gankwebapp = linfaxn.gankwebapp || (linfaxn.gankwebapp = {}));
    })(linfaxn = com.linfaxn || (com.linfaxn = {}));
})(com || (com = {}));
//# sourceMappingURL=app.js.map

//# sourceMappingURL=app.es5.js.map