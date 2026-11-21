<script>
  function comentar() {
    const c = document.getElementById("coment");
    if (!c.value) return;
    const p = document.createElement("p");
    p.textContent = c.value;
    document.getElementById("lista").appendChild(p);
    c.value = "";
  }
