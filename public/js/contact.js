var map = new BMap.Map("adress");
var point = new BMap.Point(121.407516, 31.214783);
var marker = new BMap.Marker(point); // 创建标注
map.addOverlay(marker); // 将标注添加到地图中
map.centerAndZoom(point, 18);
var opts = {
    width: 320, // 信息窗口宽度
    height: 100, // 信息窗口高度
    title: "上海米因医疗器械科技有限公司", // 信息窗口标题
    enableMessage: false, //设置信息窗发送短息
    message: "联系我们"
}
var infoWindow = new BMap.InfoWindow("地址：上海市长宁区古北路507号申菱大厦1204室</br>电话：021-32260399", opts); // 创建信息窗口对象

map.openInfoWindow(infoWindow, point);
marker.addEventListener("click", function() {
    map.openInfoWindow(infoWindow, point); //开启信息窗口
});
var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
//缩放控件type有四种类型:
//BMAP_NAVIGATION_CONTROL_SMALL：仅包含平移和缩放按钮；
// BMAP_NAVIGATION_CONTROL_PAN:仅包含平移按钮；
// BMAP_NAVIGATION_CONTROL_ZOOM：仅包含缩放按钮

//添加控件和比例尺
map.addControl(top_left_control);
map.addControl(top_left_navigation);

