const markdownInput = document.getElementById('markdown-input');
const rawHTMLoutput = document.getElementById('html-output');
const HTMLpreview = document.getElementById('preview');

markdownInput.addEventListener("input", () => {
  convertMarkdown()
});

function convertMarkdown() {
  const markdownText = markdownInput.value;
  const headingThreeRegex = /^### (.+)$/mg;
  const headingTwoRegex = /^## (.+)$/mg;
  const headingOneRegex = /^# (.+)$/mg;
  const imageRegex = /!\[(.+?)\]\((.+?)\)/g;
  const linkRegex = /\[(.+?)\]\((.+?)\)/g;
  const boldRegex = /(\*\*|__)(.+?)\1/g;
  const italicRegex = /(\*|_)(.+?)\1/g;
  const quoteRegex = /^> (.+)/gm;

  let htmlOutput = markdownText.replace(headingThreeRegex, "<h3>$1</h3>");
  htmlOutput = htmlOutput.replace(headingTwoRegex, "<h2>$1</h2>");
  htmlOutput = htmlOutput.replace(headingOneRegex, "<h1>$1</h1>");
  htmlOutput = htmlOutput.replace(imageRegex, "<img alt='$1' src='$2'>")
  htmlOutput = htmlOutput.replace(linkRegex, "<a href='$2'>$1</a>")
  htmlOutput = htmlOutput.replace(boldRegex, "<strong>$2</strong>")
  htmlOutput = htmlOutput.replace(italicRegex, "<em>$2</em>");
  htmlOutput = htmlOutput.replace(quoteRegex, "<blockquote>$1</blockquote>")
  rawHTMLoutput.textContent = htmlOutput;
  preview.innerHTML = htmlOutput;
  return htmlOutput;
}