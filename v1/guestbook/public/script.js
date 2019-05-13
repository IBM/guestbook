$(document).ready(function() {
  var headerTitleElement = $("#header h1");
  var entriesElementv2 = $("#guestbook-entriesv2");
  var formElementv2 = $("#guestbook-formv2");
  var submitElementv2 = $("#guestbook-submitv2");
  var entryContentElementv2 = $("#guestbook-entry-contentv2");
  var entriesElement = $("#guestbook-entries");
  var formElement = $("#guestbook-form");
  var submitElement = $("#guestbook-submit");
  var entryContentElement = $("#guestbook-entry-content");

  var hostAddressElement = $("#guestbook-host-address");

  var appendGuestbookEntries = function(data) {
    entriesElement.empty();
    $.each(data, function(key, val) {
      entriesElement.append("<p>" + val + "</p>");
    });
  }

  var handleSubmission = function(e) {
    e.preventDefault();
    var entryValue = entryContentElement.val()
    if (entryValue.length > 0) {
      entriesElement.append("<p>...</p>");
      $.getJSON("rpush/guestbook/" + entryValue, appendGuestbookEntries);
	  entryContentElement.val("")
    }
    return false;
  }

  var appendGuestbookEntriesv2 = function(data) {
    entriesElementv2.empty();
    $.each(data, function(key, val) {
      entriesElementv2.append("<p>" + val + "</p>");
    });
  }

  var handleSubmissionv2 = function(e) {
    e.preventDefault();
    var entryValuev2 = entryContentElementv2.val()
    if (entryValuev2.length > 0) {
      entriesElementv2.append("<p>...</p>");
      $.getJSON("rpushv2/guestbookv2/" + entryValuev2, appendGuestbookEntriesv2);
	  entryContentElementv2.val("")
    }
    return false;
  }

  submitElement.click(handleSubmission);
  submitElementv2.click(handleSubmissionv2);

  formElement.submit(handleSubmission);
  formElementv2.submit(handleSubmissionv2);
  hostAddressElement.append(document.URL);

  // Poll every second.
  (function fetchGuestbook() {
    $.getJSON("lrange/guestbook").done(appendGuestbookEntries).always(
      function() {
        setTimeout(fetchGuestbook, 1000);
      });
  })();

  // Poll every second.
  (function fetchGuestbookv2() {
    $.getJSON("lrangev2/guestbookv2").done(appendGuestbookEntriesv2).always(
      function() {
        setTimeout(fetchGuestbookv2, 1000);
      });
  })();
});
