
    chrome.contextMenus.create({
        id: 'Translate_To_zh_CH',
        title: chrome.i18n.getMessage('contextMenuTitleTranslate', "CN"),
        contexts: ['selection']
    });
    chrome.contextMenus.create({
        id: 'Translate_To_en',
        title: chrome.i18n.getMessage('contextMenuTitleTranslate', "EN"),
        contexts: ['selection']
    });



