var xcoord = 37.4578233; // 교수회관 x 좌표 (구글지도에서 얻어옴)
var ycoord = 126.9538927; // 교수회관 y 좌표 (구글지도에서 얻어옴)

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new daum.maps.LatLng(xcoord, ycoord), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new daum.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// daum.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

// 마커가 표시될 위치입니다 
var markerPosition  = new daum.maps.LatLng(xcoord, ycoord); 

// 마커를 생성합니다
var marker = new daum.maps.Marker({
    position: markerPosition
});

// 인포윈도우로 장소에 대한 설명을 표시합니다
var infowindow = new daum.maps.InfoWindow({
    content: '<div style="margin: 0 auto; width:150px;text-align:center;padding:6px 0; color:black; font-size: 14px">서울대학교 교수회관</div>'
});
infowindow.open(map, marker);

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new daum.maps.ZoomControl();
map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);