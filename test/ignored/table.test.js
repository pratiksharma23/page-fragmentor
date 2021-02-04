it('has the expected number of pages', async () => {
  await page.goto('http://10.244.1.5:1234/table.html', { waitUntil: 'load' });
  expect(await page.$$('.page')).toHaveLength(14);
  expect(await page.$eval('.page:last-child', (page) => page.innerText)).toContain('nine-hundred-ninety-nine');
});

it('copies thead', async () => {
  await page.goto('http://10.244.1.5:1234/table.html', { waitUntil: 'load' });
  expect(await page.$$('.page table > thead')).toHaveLength(14);
});
