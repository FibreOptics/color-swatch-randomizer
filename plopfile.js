const plopConfigs = {
  components: {
    description: "Create a shared component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter a name for your component",
      },
    ],
    actions: [
      {
        type: "add",
        path: "components/{{pascalCase name}}/index.ts",
        templateFile: "plop-templates/components/index.hbs",
      },
      {
        type: "add",
        path: "components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/components/component.hbs",
      },
    ],
  },
  pages: {
    description: "Create a page component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter a name for your page",
      },
      {
        type: "input",
        name: "path",
        message:
          "Enter the $path folder for your page component (@pages/${path})",
      },
    ],
    actions: [
      {
        type: "add",
        path: "pages/{{dashCase path}}/index.tsx",
        templateFile: "plop-templates/pages/index.hbs",
      },
    ],
  },
};

export default (plop) => {
  plop.setGenerator("component", plopConfigs.components);
  plop.setGenerator("page", plopConfigs.pages);
};
