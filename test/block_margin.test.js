it('is three pages', async () => {
  await page.goto('http://10.244.1.5:1234/block_margin.html', { waitUntil: 'load' });
  expect(await page.$$('.page')).toHaveLength(3);
});
