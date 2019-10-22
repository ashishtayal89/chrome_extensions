chrome.storage.onChanged.addListener(changes => {
  chrome.browserAction.setBadgeText({
    text: changes.total.newValue.toString()
  });
});
