import "@/app/globals.css";
import { ThemeProvider } from "next-themes";
import React from "react";
import ThemeChanger from "./ThemeChanger";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Preview dark|light mode",
    toolbar: {
      title: "Theme",
      defaultValue: "dark",
      items: [
        { value: 'light', icon: 'sun', title: 'light' },
        { value: 'dark', icon: 'moon', title: 'dark' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
};

export const decorators = [
  (Story: any, { globals }) => (
    <ThemeProvider>
      <ThemeChanger theme={globals.theme} />
      <Story />
    </ThemeProvider>
  ),
];
export default preview;
