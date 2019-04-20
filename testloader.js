exports.default = loader;
function loader(content, map, meta) {
    console.log('AAA', content)
    console.log('BBB', map)
    return "123"
}