async function fetchAndProcessData() {
  const firstResult = await fetchFirstData();
  const firstData = await processFirstData(firstResult);
  const secondResult = await fetchSecondData();
  const secondData = await processSecondData(secondResult);
  return [firstData, secondData];
}