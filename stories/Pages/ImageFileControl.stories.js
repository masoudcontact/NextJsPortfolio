// import React from 'react';
// import { Button } from '../Button';

// export default {
//   title: 'Addons/Controls',
//   component: Button,
//   argTypes: {
//     children: { control: 'text', name: 'Children', mapping: { basic: 'BASIC' } },
//     type: { name: 'Type', control: { type: 'text', maxLength: 32 } },
//    json: { control: 'object', name: 'JSON' },
//   imageUrls: { control: { type: 'file', accept: '.png' }, name: 'Image Urls' },
//    label: {
//      name: 'Label',
//      options: ['Plain', 'Bold'],
//       control: { type: 'select', labels: { Bold: 'BOLD' } },
//       mapping: { Bold: <b>Bold</b> },
//     },
//     background: {
//       name: 'Background color',
//       control: {
//         type: 'color',
//         presetColors: [
//           '#fe4a49',
//           '#FED766',
//           'rgba(0, 159, 183, 1)',
//           'HSLA(240,11%,91%,0.5)',
//           'slategray',
//         ],
//       },
//     },
//     mutuallyExclusiveA: { control: 'text', if: { arg: 'mutuallyExclusiveB', truthy: false } },
//     mutuallyExclusiveB: { control: 'text', if: { arg: 'mutuallyExclusiveA', truthy: false } },
//     colorMode: {
//       control: 'boolean',
//     },
//     dynamicText: {
//       if: { arg: 'colorMode', truthy: false },
//       control: 'text',
//     },
//     dynamicColor: {
//       if: { arg: 'colorMode' },
//       control: 'color',
//     },
//     advanced: {
//       control: 'boolean',
//     },
//     margin: {
//       control: 'number',
//       if: { arg: 'advanced' },
//     },
//     padding: {
//       control: 'number',
//       if: { arg: 'advanced' },
//     },
//     cornerRadius: {
//       control: 'number',
//       if: { arg: 'advanced' },
//     },
//     someText: { control: 'text' },
//     subText: { control: 'text', if: { arg: 'someText' } },
//     ifThemeExists: { control: 'text', if: { global: 'theme' } },
//     ifThemeNotExists: { control: 'text', if: { global: 'theme', exists: false } },
//     ifLightTheme: { control: 'text', if: { global: 'theme', eq: 'light' } },
//     ifNotLightTheme: { control: 'text', if: { global: 'theme', neq: 'light' } },
//   },
//   parameters: {
//     chromatic: { disable: true },
//   },
// };





// export const ImageFileControl = (args) => (
//   <img src={args.imageUrls[0]} alt="Your Example Story" />
// );
// const Template = (args) => (
//   <div style={args.background ? { background: args.background } : undefined}>
//     <Button type={args.type}>
//       {args.label?.type === "b" ? <b>{args.children}</b> : args.children}
//     </Button>
//     {args.json && <pre>{JSON.stringify(args.json, null, 2)}</pre>}
//   </div>
// );
// export const Basic = Template.bind({});
// Basic.args = {
//   children: 'basic',
//   json: DEFAULT_NESTED_OBJECT,
// };
// Basic.parameters = {
//  chromatic: { disable: false },
//   docs: { source: { state: 'open' } },
// };
