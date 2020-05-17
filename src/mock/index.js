let Mock = require("mockjs");

Mock.mock("/api/index_nav", "get", require("./data/index-nav.json"));
Mock.mock("/api/index_hot", "get", require("./data/index-hot.json"));
Mock.mock("/api/me_order2", "get", require("./data/me-order2.json"));
Mock.mock("/api/me_info", "get", require("./data/me-info.json"));
Mock.mock("/api/sort_all", "get", require("./data/index-hot.json"));
Mock.mock("/api/sort_gift", "get", require("./data/sort-gift.json"));
Mock.mock("/api/sort_plant", "get", require("./data/sort-plant.json"));