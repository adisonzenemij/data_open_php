function strgRemove(name) {
  localStorage.removeItem(name);
}

function strgGet(name) {
  return localStorage.getItem(name);
}

function strgSet(name, data) {
  localStorage.setItem(name, data);
}

function strgStringify(name, data) {
  localStorage.setItem(
    name,
    JSON.stringify(
      data
    )
  );
}
