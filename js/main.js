const $buttonEl = $("button");
const $inputEl = $("input");
const $ulEl = $("ul");

function addItem() {
  const $inputTag = $("<input>").attr("type", "checkbox").addClass("checkbox");
  const $newSkillEl = $("<li>");
  const $skillText = $inputEl.val();
  $newSkillEl.text($skillText);
  console.log($newSkillEl);
  $newSkillEl.prepend($inputTag);
  $ulEl.append($newSkillEl);
  $inputEl.val("");
}

function removeItem() {
  $(this).parent().remove();
  $inputEl.val("");
  $inputEl.focus();
}

$ulEl.on("click", ".checkbox", removeItem);
$buttonEl.on("click", addItem);
