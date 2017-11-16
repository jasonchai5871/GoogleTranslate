
    chrome.contextMenus.create({
        title: chrome.i18n.getMessage('contextMenuTitleTranslate', "Chinese"),
        contexts: ['selection']
    });
    chrome.contextMenus.create({
        title: chrome.i18n.getMessage('contextMenuTitleTranslate', "english"),
        contexts: ['selection']
    });


