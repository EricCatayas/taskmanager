function convertJsonToTask(jsonData) {
  return {
    id: jsonData.id,
    title: jsonData.title,
    status: jsonData.status,
    color: jsonData.color
  };
}
