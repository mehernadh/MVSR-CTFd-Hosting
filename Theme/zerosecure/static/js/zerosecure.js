/* Presentation only. CTFd continues to own authentication, teams and flags. */
(function () {
  "use strict";

  var palette = ["#55f12b", "#f4f7f2", "#7fd9ae", "#d0e78a", "#77bdd4", "#b6b6da", "#edc07d", "#80a878", "#d2b3bc", "#b8c6b0"];

  function themeChart(option) {
    if (!option || typeof option !== "object") return option;
    option.backgroundColor = "#0d130e";
    option.color = palette.slice();
    option.textStyle = Object.assign({}, option.textStyle, { color: "#cbd8c6", fontFamily: "Space Grotesk, Arial, sans-serif" });
    if (option.title) {
      option.title.textStyle = Object.assign({}, option.title.textStyle, { color: "#f4f7f2", fontSize: 16, fontWeight: 500 });
    }
    if (option.legend) {
      option.legend.textStyle = Object.assign({}, option.legend.textStyle, { color: "#bcccb5" });
      option.legend.pageTextStyle = { color: "#bcccb5" };
      option.legend.pageIconColor = "#55f12b";
      option.legend.pageIconInactiveColor = "#3d5135";
    }
    if (option.tooltip) {
      option.tooltip.backgroundColor = "#101c10";
      option.tooltip.borderColor = "#45633a";
      option.tooltip.textStyle = { color: "#f4f7f2" };
    }
    ["xAxis", "yAxis"].forEach(function (key) {
      if (!option[key]) return;
      var axes = Array.isArray(option[key]) ? option[key] : [option[key]];
      axes.forEach(function (axis) {
        axis.axisLabel = Object.assign({}, axis.axisLabel, { color: "#a3b29f" });
        axis.nameTextStyle = Object.assign({}, axis.nameTextStyle, { color: "#a3b29f" });
        axis.axisLine = Object.assign({}, axis.axisLine, { lineStyle: { color: "#40543a" } });
        axis.splitLine = Object.assign({}, axis.splitLine, { lineStyle: { color: "#263522" } });
      });
    });
    if (option.toolbox) {
      option.toolbox.iconStyle = { borderColor: "#a3b29f" };
      option.toolbox.emphasis = { iconStyle: { borderColor: "#55f12b" } };
    }
    (option.dataZoom || []).forEach(function (zoom) {
      zoom.textStyle = { color: "#a3b29f" };
      zoom.borderColor = "#40543a";
      zoom.fillerColor = "rgba(85,241,43,0.12)";
      zoom.handleStyle = { color: "#55f12b" };
    });
    (option.series || []).forEach(function (series, index) {
      var color = palette[index % palette.length];
      series.itemStyle = series.itemStyle || {};
      series.itemStyle.color = color;
      if (series.itemStyle.normal) series.itemStyle.normal.color = color;
      if (series.lineStyle) series.lineStyle.color = color;
      if (series.areaStyle) {
        series.areaStyle.color = color;
        series.areaStyle.opacity = 0.12;
        if (series.areaStyle.normal) {
          series.areaStyle.normal.color = color;
          series.areaStyle.normal.opacity = 0.12;
        }
      }
      if (series.type === "pie") {
        (series.data || []).forEach(function (item, itemIndex) {
          if (!item || typeof item !== "object") return;
          var itemColor = item.name === "Fails" ? "#ff9797" : item.name === "Solves" ? "#55f12b" : palette[itemIndex % palette.length];
          item.itemStyle = Object.assign({}, item.itemStyle, { color: itemColor });
        });
      }
    });
    return option;
  }

  window.ZeroSecureTheme = { chart: themeChart };

  function markCurrentPage() {
    var current = window.location.pathname.replace(/\/$/, "");
    document.querySelectorAll(".navbar .nav-link[href]").forEach(function (link) {
      if (new URL(link.href, window.location.href).pathname.replace(/\/$/, "") === current) {
        link.setAttribute("aria-current", "page");
      }
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", markCurrentPage);
  else markCurrentPage();
}());
