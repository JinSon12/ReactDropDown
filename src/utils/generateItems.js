export const generateJSONItems = (count) => {
  let list = [];

  for (let i = 0; i < count; i++) {
    let jsonObj = {};
    jsonObj["id"] = i;
    jsonObj["item"] = "item " + i;
    jsonObj["selected"] = false;
    list.push(jsonObj);
  }

  return list;
};
