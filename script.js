let rpBtn = document.getElementById('rpBtn');

rpBtn.addEventListener('click', function () {
  let sentence = document.getElementById('inputEl').value;
  let ns = sentence.replace(/\s/g, '_');
  document.getElementById('output').innerHTML = ns;
});
