function execCmd(command) {
  const editor = document.getElementById('text-editor');
  editor.focus();
  document.execCommand(command, false, null);
}

function changeColor(color) {
  const editor = document.getElementById('text-editor');
  editor.focus();
  document.execCommand('foreColor', false, color);
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".editor-button");
  const colorPicker = document.getElementById("fontColor");

  const toggleable = ["bold", "italic", "underline", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull"];

  buttons.forEach(button => {
    const command = button.getAttribute("data-cmd");

    button.addEventListener("click", () => {
      execCmd(command);

      if (toggleable.includes(command)) {
        if (command.startsWith("justify")) {
          buttons.forEach(btn => {
            const cmd = btn.getAttribute("data-cmd");
            if (cmd && cmd.startsWith("justify")) {
              btn.classList.remove("active");
            }
          });
          button.classList.add("active");
        } else {
          button.classList.toggle("active");
        }
      }
    });
  });

  colorPicker.addEventListener("change", (e) => {
    changeColor(e.target.value);
  });
});
