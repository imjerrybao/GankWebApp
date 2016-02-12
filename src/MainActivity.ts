
///<reference path="../androidui-sdk/android-ui.d.ts"/>
///<reference path="../gen/R/layout.ts"/>

module com.linfaxn.gankwebapp {
    import Activity = android.app.Activity;
    import ActionBarActivity = android.app.ActionBarActivity;
    import TextView = android.widget.TextView;
    import Button = android.widget.Button;
    import View = android.view.View;
    import ViewGroup = android.view.ViewGroup;
    import LinearLayout = android.widget.LinearLayout;
    import Gravity = android.view.Gravity;
    import Log = android.util.Log;
    import Color = android.graphics.Color;
    import BaseAdapter = android.widget.BaseAdapter;
    import ListView = android.widget.ListView;
    import PullRefreshLoadLayout = androidui.widget.PullRefreshLoadLayout;
    import R = com.linfaxn.gankwebapp.R;
    import Toast = android.widget.Toast;
    import ImageView = android.widget.ImageView;


    export class MainActivity extends ActionBarActivity {
        static ListLoadCount = 20;

        private prll:PullRefreshLoadLayout;
        private adapter:MyListAdapter;

        private nextLoadingPage=1;
        static AllDataTitle = new Map<string, string>();//<20016-01-01, 标题>

        onCreate():void {
            super.onCreate();
            this.setTitle('首页');
            this.setContentView(R.layout.activity_main);

            let listView = <ListView>this.findViewById('listView');
            this.adapter = new MyListAdapter();
            listView.setAdapter(this.adapter);

            this.initAllDayTitle().then(()=>{
                this.initPRLL();
            }, ()=>{
                Toast.makeText(this, '标题数据获取失败', Toast.LENGTH_SHORT).show();
                //标题数据获取失败也继续展示福利列表
                this.initPRLL();
            })
        }

        private initAllDayTitle(){
            //TODO get http://gank.io/history
            return new Promise<void>((resolve, reject)=>{
                resolve();
                //fetch(`http://gank.io/history`)
                //    .then((response)=>{
                //        return response.text();
                //    }).then((text)=>{
                //        resolve();
                //    }).catch((ex)=>{
                //        console.error(ex);
                //        reject();
                //    });
            });
        }

        private initPRLL(){
            this.prll = <PullRefreshLoadLayout>this.findViewById('prll');
            let activity = this;

            this.prll.setRefreshLoadListener({
                onRefresh(prll:PullRefreshLoadLayout):void {
                    activity.nextLoadingPage = 1;
                    activity.loadNextPage().then((items)=>{
                        activity.adapter.data = items;
                        activity.adapter.notifyDataSetChanged();
                        activity.prll.setHeaderState(PullRefreshLoadLayout.State_Header_Normal);
                    }, ()=>{
                        activity.prll.setHeaderState(PullRefreshLoadLayout.State_Header_RefreshFail);
                    });
                },
                onLoadMore(prll:PullRefreshLoadLayout):void {
                    activity.loadNextPage().then((items)=>{
                        activity.adapter.data.push(...items);
                        activity.adapter.notifyDataSetChanged();
                        if(items.length == MainActivity.ListLoadCount){
                            activity.prll.setFooterState(PullRefreshLoadLayout.State_Footer_Normal);
                        }else{
                            activity.prll.setFooterState(PullRefreshLoadLayout.State_Footer_NoMoreToLoad);
                        }
                    }, ()=>{
                        activity.prll.setFooterState(PullRefreshLoadLayout.State_Footer_LoadFail);
                    });
                }
            });
            //start real loading
            activity.prll.setFooterState(PullRefreshLoadLayout.State_Footer_Normal);
            activity.prll.setFooterState(PullRefreshLoadLayout.State_Footer_Loading);
        }

        private loadNextPage(){
            let activity = this;

            return new Promise<Array<ItemModel>>((resolve, reject)=>{
                fetch(`http://gank.avosapps.com/api/data/福利/${MainActivity.ListLoadCount}/${this.nextLoadingPage}`)
                .then((response)=>{
                    return response.json();
                }).then((json)=>{
                    resolve(json.results);
                    this.nextLoadingPage++;
                }).catch((ex)=>{
                    console.error(ex);
                    Toast.makeText(activity, '载入失败', Toast.LENGTH_SHORT).show();
                    reject();
                })
            });
        }

    }

    class MyListAdapter extends BaseAdapter{
        data:Array<ItemModel> = [];
        getView(position:number, convertView:View, parent:ViewGroup):View {
            if(convertView==null){
                convertView = View.inflate(parent.getContext(), R.layout.main_list_item, null);
            }
            let item = this.getItem(position);
            (<ImageView>convertView.findViewById(R.id.imageView)).setImageURI(item.url);
            let day = item.publishedAt.split('T')[0];
            (<TextView>convertView.findViewById(R.id.title)).setText(MainActivity.AllDataTitle.get(day) || '暂无标题');
            (<TextView>convertView.findViewById(R.id.summary)).setText(day);
            return convertView;
        }

        getCount():number {
            return this.data.length;
        }

        getItem(position:number):ItemModel {
            return this.data[position];
        }

        getItemId(position:number):number {
            return -1;
        }
    }


}