"use strict";function getWeather(){var t=$("h3").data("location"),e=$(".weather");console.log(t),$.ajax({url:"/weather",method:"GET",data:t}).then(function(t){e.html("<strong>"+t.currently.temperature+" ºC </strong>"+t.currently.summary)})}console.log("HOT DAMN"),$(function(){$("*[data-location]").length>0&&getWeather()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJnZXRXZWF0aGVyIiwibG9jYXRpb24iLCIkIiwiZGF0YSIsIiR3ZWF0aGVyIiwiY29uc29sZSIsInVybCIsImFqYXgiLCJodG1sIiwiY3VycmVudGx5IiwidGVtcGVyYXR1cmUiLCJzdW1tYXJ5IiwibG9nIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiYUFJQyxTQUZEQSxhQUtFLElBQU1DLEVBQVdDLEVBQUUsTUFBTUMsS0FBSyxZQURoQ0MsRUFBQUYsRUFBQSxZQUVFRyxRQUFNRCxJQUFBQSxHQUVOQyxFQUFBQSxNQUdFQyxJQUFLLFdBRExDLE9BQUssTUFDTEQsS0FBS0wsSUFFTEUsS0FBQUEsU0FBQUEsR0FIRkMsRUFLTUksS0FMTixXQUtnQkwsRUFBQU0sVUFBQUMsWUFMaEIsZ0JBS2dCUCxFQUFBTSxVQUFBRSxXQWpCbEJOLFFBQVFPLElBQUksWUFBWlAsRUFBQUEsV0FHS0gsRUFBRSxvQkFBb0JXLE9BQVMsR0FBR2IiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ0hPVCBEQU1OJyk7XG5cbiQoKCkgPT4ge1xuICBpZigkKCcqW2RhdGEtbG9jYXRpb25dJykubGVuZ3RoID4gMCkgZ2V0V2VhdGhlcigpO1xufSk7XG5cbmZ1bmN0aW9uIGdldFdlYXRoZXIoKSB7XG4gIGNvbnN0IGxvY2F0aW9uID0gJCgnaDMnKS5kYXRhKCdsb2NhdGlvbicpO1xuICBjb25zdCAkd2VhdGhlciA9ICQoJy53ZWF0aGVyJyk7XG5cbiAgY29uc29sZS5sb2cobG9jYXRpb24pO1xuXG4gICQuYWpheCh7XG4gICAgdXJsOiAnL3dlYXRoZXInLFxuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgZGF0YTogbG9jYXRpb25cbiAgfSlcbiAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAkd2VhdGhlci5odG1sKGA8c3Ryb25nPiR7ZGF0YS5jdXJyZW50bHkudGVtcGVyYXR1cmV9IMK6QyA8L3N0cm9uZz4ke2RhdGEuY3VycmVudGx5LnN1bW1hcnl9YCk7XG4gIH0pO1xufVxuLy9cbi8vIGZ1bmN0aW9uIGdldEV2ZW50cygpe1xuLy8gICAvL3NhbWUgYXMgZ2V0V2VhdGhlciBmdW5jdGlvbiAoc2FtZSBsb2NhdGlvbilcbi8vICAgY29uc3QgbG9jYXRpb24gPSAkKCdoMycpLmRhdGEoJ2xvY2F0aW9uJyk7XG4vLyAgIC8vcCBjbGFzcyAod2hlcmUgZGF0YSB3aWxsIHByaW50KVxuLy8gICBjb25zdCAkZXZlbnRzID0gJCgnLmV2ZW50cycpO1xuLy9cbi8vICAgJC5hamF4KHtcbi8vICAgICAvL2NvbnRyb2xsZXJcbi8vICAgICB1cmw6ICcvZXZlbnRzJyxcbi8vICAgICAvL21ldGhvZFxuLy8gICAgIG1ldGhvZDogJ0dFVCcsXG4vLyAgICAgLy9sb25naXR1ZSBhbmQgbGF0aXR1ZGUgc3BlY2lmaWVkIGJ5IGRhdGEtbG9jYXRpb25cbi8vICAgICBkYXRhOiBsb2NhdGlvblxuLy8gICB9KVxuLy8gICAgIC50aGVuKChkYXRhKSA9PiB7XG4vL1xuLy8gICAgICAgLy90aGUgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBvZiBsb2NhdGlvbiB0dXJuZWQgaW50byBKU09OIHN0cmluZyBhbmQgdGhlbiBzZW50IHRvIGV2ZW50cy5qcywgc2VudCB0byBTa2lkZGxlLCB0aGVuIHJlY2VpdmUgZXZlbnQgcmVzdWx0cyBzdGlsbCBpbiBKU09OXG4vL1xuLy8gICAgICAgLy9zaG93IGV2ZW50cyBpbiBhcnJheSBpbiBjb25zb2xlIGxvZyAoZmluZCBrZXktdmFsdWUgcGFpcnMpXG4vLyAgICAgICBjb25zb2xlLmxvZyhkYXRhLnJlc3VsdHMpO1xuLy9cbi8vICAgICAgIC8vbG9vcCB0aHJvdWdoIGV2ZW50cyAoaW5kZXgpXG4vLyAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGF0YS5yZXN1bHRzLmxlbmd0aDsgaSsrKXtcbi8vICAgICAgICAgLy9wcmVwZW5kIG5vdCBodG1sIGJlY2F1c2UgaXQgaXMgYSBKU09OIHN0cmluZz9cbi8vICAgICAgICAgJGV2ZW50cy5wcmVwZW5kKGBcbi8vICAgICAgICAgPGJyPjx1PiR7ZGF0YS5yZXN1bHRzW2ldLmV2ZW50bmFtZX08L3U+PGJyPlxuLy9cbi8vICAgICAgICAgJHtkYXRhLnJlc3VsdHNbaV0udmVudWUubmFtZX08YnI+XG4vL1xuLy8gICAgICAgICAke2RhdGEucmVzdWx0c1tpXS52ZW51ZS50b3dufTxicj5cbi8vXG4vLyAgICAgICAgICR7ZGF0YS5yZXN1bHRzW2ldLnZlbnVlLnR5cGV9PGJyPlxuLy9cbi8vICAgICAgICAgJHtkYXRhLnJlc3VsdHNbaV0uZGVzY3JpcHRpb259PGJyPlxuLy9cbi8vICAgICAgICAgPGEgaHJlZj1cIiR7ZGF0YS5yZXN1bHRzW2ldLmxpbmt9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+TW9yZSBJbmZvPC9hPjxicj5gXG4vLyAgICAgICApOyAvL1NraWRkbGUgbGluayBmb3IgZWFjaCBldmVudCByZXN1bHQgOilcbi8vXG4vLyAgICAgICB9XG4vL1xuLy8gICAgIH0pO1xuLy8gfVxuIl19
