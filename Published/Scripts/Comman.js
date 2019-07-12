var globalapp = {};
var getUrl = window.location.origin;
var getPathName = window.location.pathname.split('/')[1];
if (getPathName != "" && getPathName != "Home") {
    globalapp.baseUrl = getUrl + "/" + getPathName;
} else {
    globalapp.baseUrl = getUrl;
}