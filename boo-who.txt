function booWho(bool) {
  if (typeof(bool) === "boolean"){
    return true;
  } else bool = false;
  console.log(bool)
  return bool;
}

booWho(true);