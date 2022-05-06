module.exports = [
    {
        name: "UI Layout",
        sections: [
            {
                name: "Container",
                components: "src/components/UI/Layout/Container.tsx",
                content: "docs/components/Container.md",
                exampleMode: 'expand',
            },
            {
                name: "Layouts",
                components: "src/components/UI/Layout/index.tsx",
                content: "docs/components/Layout.md",
                exampleMode: 'expand',
            }
        ]
    },
    {
        name: "Form",
        sections: [
            {
                name: "UI Form",
                components: "src/components/UI/Form.tsx",
                content: "docs/components/Form.md",
                exampleMode: 'expand',
            }
        ]
    }
]