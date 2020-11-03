const randomInt = (a = 1, b = 0) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1))
};

const tastes = ['c фуа-гра', 'c рыбой', 'c курой']

const getFoodItem = () => ({
  id: 0,
  title: 'Нямушка',
  taste: tastes[randomInt(0, tastes.length)],
  count: randomInt(10, 100),
  gift: {
    name: 'mouse',
    count: randomInt(1, 5)
  },
  weight: randomInt(500, 1001)
})

export const getFoodList = new Promise((resolve) => {
  setTimeout(() => {
    resolve(new Array(3).fill('').map(getFoodItem))
  }, 300)
});
