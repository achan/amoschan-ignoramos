---
title: My Commit Stream
permalink: commits
---

<div id="activity" class="commit-stream">Loading activity...</div>

<script src="/js/mustache.js"></script>
<script src="/js/githubActivity.min.js"></script>

<script type="text/javascript">
  var options = {
    username: 'achan',
    doc: document,
    onCompleteCallback: function (html) {
      document.getElementById('activity').innerHTML = html;
    }
  };

  githubActivity.requestActivity(options);
</script>
