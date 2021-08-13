var params = new window.URLSearchParams(window.location.search);

function checker() {
  if (params.get("fbclid")) {
    if (window.localStorage.getItem("myfbclid") == null) {
      window.localStorage.setItem("myfbclid", params.get("fbclid"));
    }
  }

  if (params.get("gclid")) {
    if (window.localStorage.getItem("mygclid") == null) {
      window.localStorage.setItem("mygclid", params.get("gclid"));
    }
  }

  if (params.get("utm_medium")) {
    if (window.localStorage.getItem("myutm_medium") == null) {
      window.localStorage.setItem("myutm_medium", params.get("utm_medium"));
    }
  }

  if (params.get("utm_campaign")) {
    if (window.localStorage.getItem("myutm_campaign") == null) {
      window.localStorage.setItem("myutm_campaign", params.get("utm_campaign"));
    }
  }

  if (params.get("utm_source")) {
    if (window.localStorage.getItem("myutm_source") == null) {
      window.localStorage.setItem("myutm_source", params.get("utm_source"));
    }
  }

  if (window.localStorage.getItem("myreferrer") == null) {
    window.localStorage.setItem("myreferrer", document.referrer);
  }
}
