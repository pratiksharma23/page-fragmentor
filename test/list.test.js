it('has the expected number of pages', async () => {
  await page.goto('http://localhost:1234/list.html', { waitUntil: 'load' });
  expect(await page.$$('.page')).toHaveLength(5);
});
