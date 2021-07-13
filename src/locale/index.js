/**
 * 配置文件导入
 */
import example from "./example";

function concatLocale(...localeModules) {
  const allLocales = {};

  localeModules.map((localeModule) => {
    const localeModuleName = localeModule.name;

    if (!localeModuleName) {
      throw new ReferenceError("国际化模块没有定义name字段");
    }

    for (let key in localeModule) {
      if (key !== "name") {
        allLocales[key] = Object.assign(allLocales[key] || {}, {
          [localeModuleName]: localeModule[key],
        });
      }
    }
  });
  return allLocales;
}

export default concatLocale(
  example,
);
