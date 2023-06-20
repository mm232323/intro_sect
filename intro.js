let feat = document.getElementById("feat")
let feat_a = document.getElementById("feat_a");
let comp = document.getElementById("comp")
let comp_a = document.getElementById("comp_a");
let to = document.getElementById("to")
let go = document.getElementById("go")


feat.onclick = () => {
  feat_a.classList.toggle('Afeat_a')
  feat_a.classList.toggle("feat_a");
  comp_a.classList.remove('Acomp_a')
  comp_a.classList.add("comp_a");
  to.classList.toggle('Ato')
  to.classList.toggle("to");
  go.classList.remove("Ago")
  go.classList.add("go");
}
comp.onclick = () => {
  comp_a.classList.toggle("Acomp_a");
  comp_a.classList.toggle("comp_a");
  feat_a.classList.remove("Afeat_a")
  feat_a.classList.add("feat_a");
  to.classList.remove('Ato')
  to.classList.add("to");
  go.classList.toggle('Ago')
  go.classList.toggle('go')
};
feat_a.onclick = () => {
  feat_a.classList.toggle("Afeat_a");
  feat_a.classList.toggle("feat_a");
  comp_a.classList.remove("Acomp_a");
  comp_a.classList.add("comp_a");
  to.classList.toggle("Ato");
  to.classList.toggle("to");
  go.classList.remove("Ago");
  go.classList.add("go");
}
comp_a.onclick = () => {
  comp_a.classList.toggle("Acomp_a");
  comp_a.classList.toggle("comp_a");
  feat_a.classList.remove("Afeat_a");
  feat_a.classList.add("feat_a");
  to.classList.remove("Ato");
  to.classList.add("to");
  go.classList.toggle('Ago')
  go.classList.toggle('go')
};