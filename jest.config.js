module.exports = {
  preset: "ts-jest",
  // testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.vue$": "vue-jest",
  },
  moduleFileExtensions: ["js", "ts", "json", "vue"],
};
