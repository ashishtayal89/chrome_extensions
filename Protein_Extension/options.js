(function() {
  chrome.storage.sync.get("goal", item => {
    document.getElementById("goal").innerHTML = item.goal ? item.goal : 0;
  });
  document.getElementById("save").onclick = () => {
    var goal = document.getElementById("goal").value;
    chrome.storage.sync.set({ goal }, () => {
      close();
    });
  };
  document.getElementById("reset").onclick = () => {
    chrome.storage.sync.set({ total: 0 });
    var opt = {
      type: "basic",
      title: "Total reset!",
      message: "Total has been reset back to 0",
      iconUrl: "icon.png"
    };
    chrome.notifications.create("reset", opt, () => {});
  };
})();
