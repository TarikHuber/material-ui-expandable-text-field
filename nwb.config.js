module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ExpandableTextField',
      externals: {
        react: 'React'
      }
    }
  }
}
