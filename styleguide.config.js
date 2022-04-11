const path = require("path");
const sections = require("./section.js");

module.exports = {
    propsParser: require("react-docgen-typescript").parse,
    resolver: require("react-docgen").resolver.findAllComponentDefinitions,
    theme: {
        fontFamily: {
            base: '"Poppins", sans-serif',
            monospace: ["Fira Code"],
        }
    },
    getExampleFilename(componentPath) {
        const name = path.basename(componentPath, '.tsx')
        return `docs/components/${name.replace(/\.tsx$/, '.md')}`
    },
    getComponentPathLine(componentPath) {
        const name = path.basename(componentPath, '.tsx')
        let dir = path.dirname(componentPath)
        if (dir.includes('src\\components\\UI')) {
            dir = dir.replace('src\\components\\UI', "@UI")
        }
        dir = dir.replace(/\\/g, '/');
        return `import ${name} from "${dir}";`
    },
    contextDependencies: [
        path.resolve(__dirname, "section.js")
    ],
    components: "src/components/**/*.js",
    require: [path.join(__dirname, 'docs/dist/dist.css')],
    moduleAliases: {
        "@UI": path.resolve(__dirname, "src/components/UI/"),
    },
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/containers/styleguide/Wrapper')
    },
    sections: sections
};