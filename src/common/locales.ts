import { Identifier } from "./types";

export const zh_cn = new Map<Identifier, string>([
  ["localeName", "简体中文"],
  ["stayTop", "总是置顶"],
  ["listenClipboard", "监听剪贴板"],
  ["autoCopy", "自动复制"],
  ["autoPaste", "自动粘贴"],
  ["autoPurify", "自动净化"],
  ["incrementalCopy", "增量复制"],
  ["smartDict", "智能词典"],
  ["translate", "翻译"],
  ["copySource", "复制原文"],
  ["copyResult", "复制译文"], //复制结]果
  ["source", "原文"], // 原文
  ["result", "译文"], //译文
  ["sourceLanguage", "源语言"],
  ["targetLanguage", "目标语言"],
  ["clear", "清空"],
  ["helpAndUpdate", "帮助与更新"],
  ["exit", "退出"],
  ["contrast", "对照模式"],
  ["focus", "专注模式"],
  ["autoHide", "自动隐藏"],
  ["autoFormat", "自动格式化"],
  ["autoShow", "自动显示"],
  ["settings", "设置"],
  ["viewSource", "查看原文"],
  ["localeSetting", "区域设置"],
  ["return", "返回"],
  ["retryTranslate", "重试翻译"],
  ["dragCopy", "拖拽复制"],
  ["hideDirect", "隐藏方向"],
  ["translatorType", "翻译引擎"],
  ["dictionaryType", "查词引擎"],
  ["neverShow", "不再显示"],
  ["smartDict", "智能词典"],
  ["evaluate", "评估"],
  ["homepage", "官网"],
  ["userManual", "用户手册"],
  ["checkUpdate", "检查更新"],
  ["toDownload", "前往下载"],
  ["changelog", "更新日志"],
  ["cancel", "取消"],
  ["ok", "确定"],
  ["restoreDefault", "恢复默认设置"],
  ["enableNotify", "启用通知"],
  ["smartTranslate", "智能互译"],
  ["capture", "截图翻译"],
  ["apiConfig", "API设置"],
  ["undo", "撤销"],
  ["redo", "重做"],
  ["cut", "剪切"],
  ["copy", "复制"],
  ["paste", "粘贴"],
  ["pasteAndMatchStyle", "粘贴并匹配样式"],
  ["selectAll", "全选"],
  ["delete", "删除"],
  ["minimize", "最小化"],
  ["close", "关闭"],
  ["quit", "退出"],
  ["reload", "重载"],
  ["forceReload", "强制重载"],
  ["editMenu", "编辑菜单"],
  ["windowMenu", "窗口菜单"],
  ["switches", "开关"],
  ["options", "选项"],
  ["skipTaskbar", "隐藏任务栏"],
  ["toggleDevTools", "开启开发者工具"],
  ["togglefullscreen", "开启全屏"],
  ["resetZoom", "重置缩放"],
  ["zoomIn", "放大"],
  ["zoomOut", "缩小"],
  ["closeAsQuit", "关闭即退出"],
  ["layoutType", "布局"],
  ["autoCheckUpdate", "自动检查更新"],
  ["showConfigFolder", "打开配置文件夹"],
  ["editConfigFile", "编辑配置文件"],
  ["colorMode", "配色模式"],
  ["drawer", "侧边抽屉"],
  ["translatorConfig", "翻译器设置"],
]);

export const en = new Map<Identifier, string>([
  ["localeName", "English"],
  ["stayTop", "Stay on top"],
  ["listenClipboard", "Listen Clipboard"],
  ["autoCopy", "Auto Copy"],
  ["autoPaste", "Auto Paste"],
  ["autoPurify", "Auto Purify"],
  ["incrementalCopy", "Incremental Copy"],
  ["smartDict", "Smart Dict"],
  ["translate", "Translate"],
  ["copySource", "Copy Source"],
  ["copyResult", "Copy Result"], //复制结果
  ["source", "Source"], // 原文
  ["result", "Result"], //译文
  ["sourceLanguage", "Source Language"],
  ["targetLanguage", "Target Language"],
  ["clear", "Clear"],
  ["helpAndUpdate", "Help And Update"],
  ["exit", "Exit"],
  ["contrast", "Contrast Mode"],
  ["focus", "Focus Mode"],
  ["autoHide", "Auto Hide"],
  ["autoFormat", "Auto Format"],
  ["autoShow", "Auto Show"],
  ["settings", "Settings"],
  ["viewSource", "View Source"],
  ["localeSetting", "Locale"],
  ["return", "Return"],
  ["retryTranslate", "Retry Translate"],
  ["dragCopy", "Drag Copy"],
  ["hideDirect", "Hide Direction"],
  ["translatorType", "Translator Type"],
  ["dictionaryType", "Dictionary Type"],
  ["evaluate", "Evaluate"],
  ["homepage", "Homepage"],
  ["neverShow", "Never Show"],
  ["smartDict", "Smart Dictionary"],
  ["userManual", "User Manual"],
  ["checkUpdate", "Check Update"],
  ["toDownload", "To Download"],
  ["changelog", "Change Log"],
  ["cancel", "Cancel"],
  ["ok", "OK"],
  ["restoreDefault", "Restore default settings"],
  ["enableNotify", "Enable Notify"],
  ["smartTranslate", "Smart Translate"],
  ["capture", "Screenshot Translate"],
  ["apiConfig", "API Config"],
  ["undo", "undo"],
  ["redo", "redo"],
  ["cut", "cut"],
  ["copy", "copy"],
  ["paste", "paste"],
  ["pasteAndMatchStyle", "pasteAndMatchStyle"],
  ["selectAll", "selectAll"],
  ["delete", "delete"],
  ["minimize", "minimize"],
  ["close", "close"],
  ["quit", "quit"],
  ["reload", "reload"],
  ["forceReload", "forcereload"],
  ["toggleDevTools", "toggledevtools"],
  ["togglefullscreen", "toggleFullScreen"],
  ["resetZoom", "resetzoom"],
  ["zoomIn", "zoomin"],
  ["zoomOut", "zoomout"],
  ["editMenu", "editMenu"],
  ["windowMenu", "windowMenu"],
  ["switches", "Switches"],
  ["options", "Options"],
  ["skipTaskbar", "Skip Taskbar"],
  ["closeAsQuit", "Close As Quit"],
  ["layoutType", "Layout"],
  ["autoCheckUpdate", "Auto Check Update"],
  ["showConfigFolder", "Show Config Folder"],
  ["editConfigFile", "Edit Config File"],
  ["colorMode", "Color Mode"],
  ["drawer", "Drawer"],
  ["translatorConfig", "Translator Config"],
]);
export type Locale = typeof en;
