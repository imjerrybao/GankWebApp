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
                    "icon_github": [
                        null,
                        null,
                        null,
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFEUlEQVR42t1ba2gUVxSOm2yb7BqVGk0o1EJaE63+iIIVHy0KPkpphKLYoAWVllhBFgTr40+ghUCqRMRaCqU0UagUfyaERKtFghGUNlBKiZWqoLaigtRXYtS4/Q6cgel2Zvaee2d27+TH9yM7cx7fl5k7995zbkk2my0pBurr3pwCvMGYUqw8oiaZAJYArcAPQD/wJzAMZHMwzNf6+d5Wtk3ESgAkXA68B3wL3PIgKsUt9kU+y60VAMnVAd8DD0Mg7YeHHKPOGgGQTA3wNfA0QuK5eMoxa4omAIJXAp9H/B9XeSIoh8qCCoCAK4HbRSSeC8plZUEEQKAM8Mwi8g4op0xkAsB5EvjGQuK5oByToQoAh1XAmRiQd0C5VoUiABxNBoZiRN4B5TzZSAA4KAV6Y0jeAeVeaiJAe4zJO2jXEgCGm8cBeQebRQLAYBHwOI/T58DrwAxgKXAQ+LsAZG4Ch4C3gVc5h+d5bIjLIiUB+L1XGfQGfVZ/HwLXIyB+g30nPOIOKg6KpSoCNCsmtC/g9akAWlzT5DHgN6CDf98ObADeYWzg3+jad3zvM9cy+TMgFRBvn2LOzYEC4IY0P2IqzjYqfEJfBt4ivxozzhS/Wq8o3LtR8PqkgwRoETySa4q1i+MhwBpB3i2eAuDCdOCBwNEqiwRYJcibOE73EqBNOChlLBIgI8y9zUuAS0InxywS4Jgw90v/EQA/zNb4LJ2zSIBzGvnPdguwR8PBCosEWKGR/x63AFIFj9hC3iXCEZ0nmAyrFaaSbtxRXWsXWIAqzk2VB3GuJsMmoXK7bSPvEmG3kEsTGe0SGi23WIDlQi67SngVJzGaarEAU4VcDpLRccmKzFbyLhFuCPgcJ4OzAoOeGAjQI+BzlgyuCAw6YiBAh4DPFTIYERh0xUCALgGfETK4JzAYiIEAAwI+98jgssDgYgwEuCjgc5kMzgursUmLySeF1erz0lFzvE2EenQWEfstFmC/dFGnMxUesliAIZ2p8EKNtfR6C8l/oMFjIRmWCTdDs9zOlrSI/AvCCZ2zOVrmOOjTUK/NIgG+0Mi/z70jtFezXLXTAvKfaua+1y1ALZevdBxR2aqsCMTLOLZOzsS1NndbvNugcPkL0FBA8g0cUzffbq+6wGqfmy8Aa7l42ZunQ+wU8H5QIdOA9ETO46cQKs2rvQSY4FMc+cNdoOQG5msKLWu/co/vVmC+pOmZH+8lXPE5Cvxu8Ir+ryhCXP2Ko9t8jIjwAtd9M4SNkieEAiQ0ix0q2BZUHabmiJ8DuiwWu+5dBowqBLwLTNNsvh4OmfxgbpOEV+D5Ae/5X8BLrnvXKTyaRw3e+84QyY+5n+J8PUIHVCdA+PvjqKbNsN0RogCHJU1SNOJe9XH0KLdNnQesw9wkNcpjxmn+clQUuObnhet+TZNBwecGbJd96WMzIeRPX00I5B8EzVFUOi/8DkJ8VIAJT3kIHeTvmvYKNwc432lyWEEhdoWhAJ+E1S0e1Dx1H/gKmOeIwROZ1/hgRcJAgJQB+ZawzwtsAZ4oBB7N+YyaDIJpDeIUf1MkJ0Z4VP5HmFDKcP4viUWTrmVRH5mZI9x7TxsIUCmIQ92l9YU6NPUijwuPFRKrNBBgkoL/Yd7Q0dqiMx2lZwI/5klwUoQCnKTBtugnR5FEo48QY4ZjQNpnrUGxGq07O4ykZtEskT+N9CXoDMFnJ/u6z75nWX96nEfvVIj+aD4wMYpc/wVhd5UCbJ7djwAAAABJRU5ErkJggg=="
                    ]
                };
                var imageCache = {
                    icon_github: null
                };
                function findRatioImage(array) {
                    if (array[window.devicePixelRatio])
                        return new NetImage(array[window.devicePixelRatio], window.devicePixelRatio);
                    for (let i = array.length; i >= 0; i--) {
                        if (array[i]) {
                            return new NetImage(array[i], i);
                        }
                    }
                    throw Error('Not find radio image. May something error in build.');
                }
                class image_base64 {
                    static get icon_github() {
                        return imageCache.icon_github || (imageCache.icon_github = findRatioImage(data.icon_github));
                    }
                }
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
                class image {
                    static get icon_github() { return new NetDrawable(R.image_base64.icon_github); }
                }
                R.image = image;
                android.content.res.Resources.buildDrawableFinder = (refString) => {
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
                const _layout_data = {
                    "activity_main": "<android.support.v4.widget.drawerlayout>\n    <androidui.widget.pullrefreshloadlayout android:layout_width=\"match_parent\" android:layout_height=\"match_parent\" id=\"prll\">\n        <listview id=\"listView\">\n        </listview>\n    </androidui.widget.pullrefreshloadlayout>\n\n    <!--侧滑内容-->\n    <linearlayout android:layout_gravity=\"left\" android:background=\"white\" android:padding=\"8dp\" android:orientation=\"vertical\" android:gravity=\"center\" android:layout_width=\"240dp\" android:clickable=\"true\" android:layout_height=\"match_parent\">\n        <textview android:layout_margintop=\"60dp\" android:text=\"干货gank.io\" onclick=\"window.open('http://gank.io/')\" android:layout_width=\"wrap_content\" android:textsize=\"20sp\"></textview>\n        <textview android:textcolor=\"#999\" android:text=\"第三方社区版WebApp\" android:layout_width=\"wrap_content\" android:textsize=\"12sp\"></textview>\n        <textview onclick=\"window.location.href = 'https://github.com/linfaxin/GankWebApp'\" android:layout_margintop=\"20dp\" android:state_pressed=\"background:#ddd\" android:layout_width=\"wrap_content\" android:padding=\"8dp\" android:textcolor=\"#666\" android:gravity=\"center\" android:text=\"欢迎Star&amp;PR: \" android:drawableright=\"@drawable/icon_github\"></textview>\n        <linearlayout android:layout_margin=\"12dp\" android:layout_height=\"match_parent\" android:layout_width=\"wrap_content\" android:gravity=\"bottom\">\n            <textview onclick=\"window.location.href = 'https://github.com/linfaxin/AndroidUI-WebApp'\" android:state_pressed=\"background:#ccc\" android:background=\"#eee\" android:padding=\"8dp\" android:textcolor=\"#999\" android:text=\"由AndroidUI框架驱动\"></textview>\n        </linearlayout>\n    </linearlayout>\n\n</android.support.v4.widget.drawerlayout>",
                    "day_detail_list_item": "<linearlayout android:state_pressed=\"background:#ddd\" android:padding=\"8dp 8dp 8dp 24dp\" android:layout_width=\"match_parent\" android:layout_height=\"match_parent\" android:orientation=\"vertical\">\n    <textview android:maxLines=\"3\" android:ellipsize=\"end\" android:textSize=\"14sp\" id=\"title\"></textview>\n    <textview android:layout_marginTop=\"6dp\" android:textColor=\"#999\" android:textSize=\"12sp\" id=\"summary\"></textview>\n</linearlayout>",
                    "main_list_item": "<linearlayout android:padding=\"8dp\" android:layout_width=\"match_parent\" android:layout_height=\"match_parent\">\n    <imageview android:scaleType=\"centerCrop\" android:layout_height=\"35vw\" android:layout_width=\"35vw\" id=\"imageView\"></imageview>\n    <linearlayout android:layout_marginLeft=\"12dp\" android:layout_height=\"match_parent\" android:gravity=\"center\" android:orientation=\"vertical\">\n        <textview android:maxLines=\"3\" android:ellipsize=\"end\" android:textSize=\"18sp\" id=\"title\"></textview>\n        <textview android:layout_marginTop=\"4dp\" android:textColor=\"#999\" android:textSize=\"12sp\" id=\"summary\"></textview>\n    </linearlayout>\n</linearlayout>"
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
                layout.day_detail_list_item = '@layout/day_detail_list_item';
                layout.main_list_item = '@layout/main_list_item';
                R.layout = layout;
                android.content.res.Resources.buildLayoutFinder = (refString) => {
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
            class DayDetailActivity extends ActionBarActivity {
                onCreate(savedInstanceState) {
                    super.onCreate(savedInstanceState);
                    const activity = this;
                    this.date = this.getIntent().getStringExtra(DayDetailActivity.Extra_Date);
                    if (!this.date) {
                        this.finish();
                        return;
                    }
                    this.setTitle(this.date);
                    this.date = this.date.replace('-', '/').replace('-', '/');
                    let pd = new ProgressBar(this);
                    this.setContentView(pd, new FrameLayout.LayoutParams(-2, -2, android.view.Gravity.CENTER));
                    fetch('http://gank.avosapps.com/api/day/' + this.date)
                        .then((response) => {
                        return response.json();
                    }).then((json) => {
                        this.initPage(json.results);
                    }).catch((e) => {
                        console.error(e);
                        Toast.makeText(activity, '载入失败', Toast.LENGTH_SHORT).show();
                    });
                }
                initPage(mapData) {
                    let fuliArray = mapData['福利'];
                    delete mapData['福利'];
                    let adapter = new DetailAdapter(mapData);
                    let list = new ExpandableListView(this);
                    if (fuliArray) {
                        let fuli = fuliArray[0];
                        let imageView = new ImageView(this);
                        imageView.setScaleType(ImageView.ScaleType.CENTER_CROP);
                        imageView.setLayoutParams(new android.widget.AbsListView.LayoutParams(-1, this.getResources().getDisplayMetrics().widthPixels * 0.8));
                        imageView.setImageURI(fuli.url);
                        imageView.setOnClickListener({
                            onClick(view) {
                            }
                        });
                        list.addHeaderView(imageView);
                    }
                    list.setExpandableAdapter(adapter);
                    for (let i = 0, count = adapter.getGroupCount(); i < count; i++) {
                        list.expandGroup(i);
                    }
                    this.setContentView(list);
                }
            }
            DayDetailActivity.Extra_Title = 'title';
            DayDetailActivity.Extra_Date = 'date';
            gankwebapp.DayDetailActivity = DayDetailActivity;
            class DetailAdapter extends BaseExpandableListAdapter {
                constructor(mapData) {
                    super();
                    this.data = new Map();
                    for (let key in mapData) {
                        this.data.set(key, mapData[key]);
                    }
                }
                getGroupCount() {
                    return this.data.size;
                }
                getChildrenCount(groupPosition) {
                    return Array.from(this.data.values())[groupPosition].length;
                }
                getGroup(groupPosition) {
                    return Array.from(this.data.keys())[groupPosition];
                }
                getChild(groupPosition, childPosition) {
                    return Array.from(this.data.values())[groupPosition][childPosition];
                }
                getGroupId(groupPosition) {
                    return -1;
                }
                getChildId(groupPosition, childPosition) {
                    return -1;
                }
                hasStableIds() {
                    return false;
                }
                isChildSelectable(groupPosition, childPosition) {
                    return false;
                }
                getGroupView(groupPosition, isExpanded, convertView, parent) {
                    let groupTitle = this.getGroup(groupPosition);
                    if (!isExpanded)
                        groupTitle = '+ ' + groupTitle;
                    let density = parent.getResources().getDisplayMetrics().density;
                    let textView = convertView || new TextView(parent.getContext());
                    textView.setTextSize(18);
                    textView.setText(groupTitle);
                    textView.setPadding(16 * density, 16 * density, 16 * density, 16 * density);
                    return textView;
                }
                getChildView(groupPosition, childPosition, isLastChild, convertView, parent) {
                    let item = this.getChild(groupPosition, childPosition);
                    convertView = convertView || android.view.View.inflate(parent.getContext(), gankwebapp.R.layout.day_detail_list_item);
                    convertView.findViewById(gankwebapp.R.id.title).setText(item.desc);
                    convertView.findViewById(gankwebapp.R.id.summary).setText(item.who);
                    convertView.setOnClickListener({
                        onClick() {
                            window.open(item.url);
                        }
                    });
                    return convertView;
                }
            }
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
            class MainActivity extends ActionBarActivity {
                constructor(...args) {
                    super(...args);
                    this.nextLoadingPage = 1;
                }
                onCreate() {
                    super.onCreate();
                    const activity = this;
                    this.setTitle('首页');
                    this.setContentView(R.layout.activity_main);
                    this.listView = this.findViewById('listView');
                    this.adapter = new MyListAdapter();
                    this.listView.setAdapter(this.adapter);
                    this.listView.setOnItemClickListener({
                        onItemClick(parent, view, position, id) {
                            let item = activity.adapter.getItem(position);
                            let day = item.publishedAt.split('T')[0];
                            let title = MainActivity.AllDataTitle.get(day) || '暂无标题';
                            activity.startActivity(new android.content.Intent('com.linfaxin.gankwebapp.DayDetailActivity')
                                .putExtra(gankwebapp.DayDetailActivity.Extra_Title, title)
                                .putExtra(gankwebapp.DayDetailActivity.Extra_Date, day));
                        }
                    });
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
                                activity.prll.setFooterState(PullRefreshLoadLayout.State_Footer_Normal);
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
        })(gankwebapp = linfaxin.gankwebapp || (linfaxin.gankwebapp = {}));
    })(linfaxin = com.linfaxin || (com.linfaxin = {}));
})(com || (com = {}));
//# sourceMappingURL=app.js.map