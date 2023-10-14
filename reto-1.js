function wrapping(gifts) {
  return gifts.map((gif) => {
    const wrapperQuantity = "*".repeat(gif.length + 2);
    return `${wrapperQuantity}\n*${gif}*\n${wrapperQuantity}`;
  });
}

const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts);
