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
                const _layout_data = {
                    "activity_main": "<androidui.widget.pullrefreshloadlayout android:layout_width=\"match_parent\" android:layout_height=\"match_parent\" id=\"prll\">\n    <listview id=\"listView\">\n    </listview>\n</androidui.widget.pullrefreshloadlayout>",
                    "main_list_item": "<linearlayout android:padding=\"8dp\" android:layout_width=\"match_parent\" android:layout_height=\"match_parent\">\n    <imageview android:scaleType=\"centerCrop\" android:layout_height=\"35vw\" android:layout_width=\"35vw\" id=\"imageView\"></imageview>\n    <linearlayout android:layout_marginLeft=\"12dp\" android:layout_height=\"match_parent\" android:gravity=\"center\" android:orientation=\"vertical\">\n        <textview android:maxLines=\"3\" android:ellipsize=\"end\" android:textSize=\"18sp\" id=\"title\"></textview>\n        <textview android:layout_marginTop=\"4dp\" android:textSize=\"12sp\" id=\"summary\"></textview>\n    </linearlayout>\n</linearlayout>"
                };
                const _tempDiv = document.createElement('div');
                class layout {
                    static getLayoutData(layoutRef) {
                        if (!layoutRef)
                            return null;
                        layoutRef = layoutRef.replace('/', '.').split('.').pop();
                        if (!_layout_data[layoutRef])
                            return null;
                        _tempDiv.innerHTML = _layout_data[layoutRef];
                        let data = _tempDiv.firstElementChild;
                        _tempDiv.removeChild(data);
                        return data;
                    }
                }
                layout.activity_main = '@layout/activity_main';
                layout.main_list_item = '@layout/main_list_item';
                R.layout = layout;
                android.content.res.Resources.buildLayoutFinder = (refString) => {
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
            class MainActivity extends ActionBarActivity {
                constructor(...args) {
                    super(...args);
                    this.nextLoadingPage = 1;
                }
                onCreate() {
                    super.onCreate();
                    this.setTitle('首页');
                    this.setContentView(R.layout.activity_main);
                    let listView = this.findViewById('listView');
                    this.adapter = new MyListAdapter();
                    listView.setAdapter(this.adapter);
                    this.initAllDayTitle().then(() => {
                        this.initPRLL();
                    }, () => {
                        Toast.makeText(this, '标题数据获取失败', Toast.LENGTH_SHORT).show();
                        this.initPRLL();
                    });
                }
                initAllDayTitle() {
                    return new Promise((resolve, reject) => {
                        resolve();
                    });
                }
                initPRLL() {
                    this.prll = this.findViewById('prll');
                    let activity = this;
                    this.prll.setRefreshLoadListener({
                        onRefresh(prll) {
                            activity.nextLoadingPage = 1;
                            activity.loadNextPage().then((items) => {
                                activity.adapter.data = items;
                                activity.adapter.notifyDataSetChanged();
                                activity.prll.setHeaderState(PullRefreshLoadLayout.State_Header_Normal);
                            }, () => {
                                activity.prll.setHeaderState(PullRefreshLoadLayout.State_Header_RefreshFail);
                            });
                        },
                        onLoadMore(prll) {
                            activity.loadNextPage().then((items) => {
                                activity.adapter.data.push(...items);
                                activity.adapter.notifyDataSetChanged();
                                if (items.length == MainActivity.ListLoadCount) {
                                    activity.prll.setFooterState(PullRefreshLoadLayout.State_Footer_Normal);
                                }
                                else {
                                    activity.prll.setFooterState(PullRefreshLoadLayout.State_Footer_NoMoreToLoad);
                                }
                            }, () => {
                                activity.prll.setFooterState(PullRefreshLoadLayout.State_Footer_LoadFail);
                            });
                        }
                    });
                    activity.prll.setFooterState(PullRefreshLoadLayout.State_Footer_Normal);
                    activity.prll.setFooterState(PullRefreshLoadLayout.State_Footer_Loading);
                }
                loadNextPage() {
                    let activity = this;
                    return new Promise((resolve, reject) => {
                        fetch(`http://gank.avosapps.com/api/data/福利/${MainActivity.ListLoadCount}/${this.nextLoadingPage}`)
                            .then((response) => {
                            return response.json();
                        }).then((json) => {
                            resolve(json.results);
                            this.nextLoadingPage++;
                        }).catch((ex) => {
                            console.error(ex);
                            Toast.makeText(activity, '载入失败', Toast.LENGTH_SHORT).show();
                            reject();
                        });
                    });
                }
            }
            MainActivity.ListLoadCount = 20;
            MainActivity.AllDataTitle = new Map();
            gankwebapp.MainActivity = MainActivity;
            class MyListAdapter extends BaseAdapter {
                constructor(...args) {
                    super(...args);
                    this.data = [];
                }
                getView(position, convertView, parent) {
                    if (convertView == null) {
                        convertView = View.inflate(parent.getContext(), R.layout.main_list_item, null);
                    }
                    let item = this.getItem(position);
                    convertView.findViewById(R.id.imageView).setImageURI(item.url);
                    let day = item.publishedAt.split('T')[0];
                    convertView.findViewById(R.id.title).setText(MainActivity.AllDataTitle.get(day) || '暂无标题');
                    convertView.findViewById(R.id.summary).setText(day);
                    return convertView;
                }
                getCount() {
                    return this.data.length;
                }
                getItem(position) {
                    return this.data[position];
                }
                getItemId(position) {
                    return -1;
                }
            }
        })(gankwebapp = linfaxn.gankwebapp || (linfaxn.gankwebapp = {}));
    })(linfaxn = com.linfaxn || (com.linfaxn = {}));
})(com || (com = {}));
//# sourceMappingURL=app.js.map