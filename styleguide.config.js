module.exports = {
    components: "./components/**/*.tsx",
    propsParser: require("react-docgen-typescript").parse,
    sections: [
        {
            name: "UI Components",
            components: "./components/UI/Container.tsx",
            content: 'docs/Container.md',
            exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
            usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
        }
    ]
};