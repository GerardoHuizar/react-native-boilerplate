if (!window.Intl) {
  new Promise((resolve) => {
    resolve(import("intl"));
  })
    .then(() =>
      Promise.all([
        import("intl/locale-data/jsonp/en.js"),
        import("intl/locale-data/jsonp/es.js"),
      ])
    ) // eslint-disable-line prettier/prettier
    .then(() => console.log("success"))
    .catch((err) => {
      throw err;
    });
}
