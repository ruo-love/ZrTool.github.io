export function uid(length = 36) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const timestamp = Date.now().toString();
  const uidArray = [...timestamp];
  while (uidArray.length < length) {
    const randomCharacter = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
    uidArray.push(randomCharacter);
  }

  const uid = uidArray.slice(0, length).join("");
  return uid;
}
