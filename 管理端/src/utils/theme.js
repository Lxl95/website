const themes = {
  "white": {
    primary: "#1890FF",
    success: "#13CE66",
    warning: "#FFBA00",
    danger: "#FF4949",
    primaryText: "#303133",
    regularText: "#1a1a1a",
    secondaryText: "#909399",
    whiteColor: "#FFFFFF",
    blackColor: "#000000",
    baseColor: "#F5F7FA",
    lightColor: "#f4f4f5",
    secondColor: "#FAFAFA",
    borderBaseColor: "#DCDFE6",
    borderLightColor: "#E4E7ED",
    borderLighterColor: "#EBEEF5",
    borderExtralightColor: "#F2F6FC",
    hoverBgColor: "#b6d9fd"
  },
  "blue": {
    primary: "#0A7BE0",
    success: "#00A67E",
    warning: "#F6CF0B",
    danger: "#FE725B",
    primaryText: "#303133",
    regularText: "#1a1a1a",
    secondaryText: "#909399",
    whiteColor: "#FFFFFF",
    blackColor: "#000000",
    baseColor: "#F5F7FA",
    lightColor: "#f4f4f5",
    secondColor: "#FAFAFA",
    borderBaseColor: "#DCDFE6",
    borderLightColor: "#E4E7ED",
    borderLighterColor: "#D2D2D2",
    borderExtralightColor: "#F2F6FC",
    hoverBgColor: "#b6d9fd"
  },
  "dark": {
    primary: "#0a7be0",
    success: "#4BC376",
    warning: "#E6B61E",
    danger: "#C13737",
    primaryText: "rgba(255,255,255,0.8)",
    regularText: "rgba(255,255,255,0.7)",
    secondaryText: "#cccccc",
    whiteColor: "#1E1E1E",
    blackColor: "#eeeeee",
    baseColor: "#333333",
    lightColor: "#1E1E1E",
    secondColor: "#1E1E1E",
    borderBaseColor: "#423f3f",
    borderLightColor: "#423f3f",
    borderLighterColor: "#423f3f",
    borderExtralightColor: "#423f3f",
    hoverBgColor: "#4c4b4b"
  },
  "original": { // Element-UI原始情景颜色
    primary: "#409EFF",
    success: "#67C23A",
    warning: "#E6A23C",
    danger: "#F56C6C",
    primaryText: "#303133",
    regularText: "#606266",
    secondaryText: "#909399",
    whiteColor: "#FFFFFF",
    blackColor: "#000000",
    baseColor: "#F5F7FA",
    lightColor: "#f4f4f5",
    secondColor: "#FAFAFA",
    borderBaseColor: "#DCDFE6",
    borderLightColor: "#E4E7ED",
    borderLighterColor: "#EBEEF5",
    borderExtralightColor: "#F2F6FC",
    hoverBgColor: "#b6d9fd"
  }
};
let chalk = "";
export function themeChange(theme) {
  const oldVal = chalk ? themes[theme].primary : themes.original.primary;
  const themeCluster_primary = getThemeCluster(themes[theme].primary.replace("#", ""));
  const originalCluster_primary = getThemeCluster(themes.original.primary.replace("#", ""));

  const themeCluster_success = getThemeCluster(themes[theme].success.replace("#", ""));
  const originalCluster_success = getThemeCluster(themes.original.success.replace("#", ""));

  const themeCluster_warning = getThemeCluster(themes[theme].warning.replace("#", ""));
  const originalCluster_warning = getThemeCluster(themes.original.warning.replace("#", ""));

  const themeCluster_danger = getThemeCluster(themes[theme].danger.replace("#", ""));
  const originalCluster_danger = getThemeCluster(themes.original.danger.replace("#", ""));

  const themeCluster_primaryText = [themes[theme].primaryText];
  const originalCluster_primaryText = [themes.original.primaryText];

  const themeCluster_regularText = [themes[theme].regularText];
  const originalCluster_regularText = [themes.original.regularText];

  const themeCluster_secondaryText = [themes[theme].secondaryText];
  const originalCluster_secondaryText = [themes.original.secondaryText];

  const themeCluster_whiteColor = [themes[theme].whiteColor];
  const originalCluster_whiteColor = [themes.original.whiteColor];

  const themeCluster_blackColor = [themes[theme].blackColor];
  const originalCluster_blackColor = [themes.original.blackColor];

  const themeCluster_baseColor = [themes[theme].baseColor];
  const originalCluster_baseColor = [themes.original.baseColor];

  const themeCluster_lightColor = [themes[theme].lightColor];
  const originalCluster_lightColor = [themes.original.lightColor];

  const themeCluster_secondColor = [themes[theme].secondColor];
  const originalCluster_secondColor = [themes.original.secondColor];

  const themeCluster_borderBaseColor = [themes[theme].borderBaseColor];
  const originalCluster_borderBaseColor = [themes.original.borderBaseColor];

  const themeCluster_borderLightColor = [themes[theme].borderLightColor];
  const originalCluster_borderLightColor = [themes.original.borderLightColor];

  const themeCluster_borderLighterColor = [themes[theme].borderLighterColor];
  const originalCluster_borderLighterColor = [themes.original.borderLighterColor];

  const themeCluster_borderExtralightColor = [themes[theme].borderExtralightColor];
  const originalCluster_borderExtralightColor = [themes.original.borderExtralightColor];

  const themeCluster_hoverBgColor = [themes[theme].hoverBgColor];
  const originalCluster_hoverBgColor = [themes.original.hoverBgColor];

  const arr = [{
    old: originalCluster_primary,
    new: themeCluster_primary
  }, {
    old: originalCluster_success,
    new: themeCluster_success
  }, {
    old: originalCluster_warning,
    new: themeCluster_warning
  }, {
    old: originalCluster_danger,
    new: themeCluster_danger
  }, {
    old: originalCluster_primaryText,
    new: themeCluster_primaryText
  }, {
    old: originalCluster_regularText,
    new: themeCluster_regularText
  }, {
    old: originalCluster_secondaryText,
    new: themeCluster_secondaryText
  }, {
    old: originalCluster_whiteColor,
    new: themeCluster_whiteColor
  }, {
    old: originalCluster_blackColor,
    new: themeCluster_blackColor
  }, {
    old: originalCluster_baseColor,
    new: themeCluster_baseColor
  }, {
    old: originalCluster_lightColor,
    new: themeCluster_lightColor
  }, {
    old: originalCluster_secondColor,
    new: themeCluster_secondColor
  }, {
    old: originalCluster_borderBaseColor,
    new: themeCluster_borderBaseColor
  }, {
    old: originalCluster_borderLightColor,
    new: themeCluster_borderLightColor
  }, {
    old: originalCluster_borderLighterColor,
    new: themeCluster_borderLighterColor
  }, {
    old: originalCluster_borderExtralightColor,
    new: themeCluster_borderExtralightColor
  }, {
    old: originalCluster_hoverBgColor,
    new: themeCluster_hoverBgColor
  }];

  const getHandler = (id) => {
    return () => {
      const newStyle = updateStyle(chalk, arr);

      let styleTag = document.getElementById(id);
      if (!styleTag) {
        styleTag = document.createElement("style");
        styleTag.setAttribute("id", id);
        document.head.appendChild(styleTag);
      }
      styleTag.innerText = newStyle;
    };
  };

  if (!chalk) {
    const url = `./css/index.css`;
    getCSSString(url);
  }

  const chalkHandler = getHandler("chalk-style");

  chalkHandler();

  const styles = [].slice.call(document.querySelectorAll("style"))
    .filter(style => {
      const text = style.innerText;
      return new RegExp(oldVal, "i").test(text) && !/Chalk Variables/.test(text);
    });
  styles.forEach(style => {
    const { innerText } = style;
    if (typeof innerText !== "string") return;
    style.innerText = updateStyle(innerText, arr);
  });
}

function updateStyle(style, arr) {
  let newStyle = style;
  for (const item of arr) {
    item.old.forEach((color, index) => {
      newStyle = newStyle.replace(new RegExp(color, "ig"), item.new[index]);
    });
  }
  return newStyle;
}

function getCSSString(url) {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        chalk = xhr.responseText.replace(/@font-face{[^}]+}/, "");
        resolve();
      }
    };
    xhr.open("GET", url, false);
    xhr.send();
  });
}

function getThemeCluster(theme) {
  const tintColor = (color, tint) => {
    let red = parseInt(color.slice(0, 2), 16);
    let green = parseInt(color.slice(2, 4), 16);
    let blue = parseInt(color.slice(4, 6), 16);

    if (tint === 0) { // when primary color is in its rgb space
      return [red, green, blue].join(",");
    } else {
      red += Math.round(tint * (255 - red));
      green += Math.round(tint * (255 - green));
      blue += Math.round(tint * (255 - blue));

      red = red.toString(16);
      green = green.toString(16);
      blue = blue.toString(16);

      return `#${red}${green}${blue}`;
    }
  };

  const shadeColor = (color, shade) => {
    let red = parseInt(color.slice(0, 2), 16);
    let green = parseInt(color.slice(2, 4), 16);
    let blue = parseInt(color.slice(4, 6), 16);

    red = Math.round((1 - shade) * red);
    green = Math.round((1 - shade) * green);
    blue = Math.round((1 - shade) * blue);

    red = red.toString(16);
    green = green.toString(16);
    blue = blue.toString(16);

    return `#${red}${green}${blue}`;
  };

  const clusters = [theme];
  for (let i = 0; i <= 9; i++) {
    clusters.push(tintColor(theme, Number((i / 10).toFixed(2))));
  }
  clusters.push(shadeColor(theme, 0.1));
  return clusters;
}
