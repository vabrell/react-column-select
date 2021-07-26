import React from 'react'
import { Story, Meta } from '@storybook/react'

import ColumnSelect, { options } from './ColumnSelect'

export default {
  title: 'Example/Column Select',
  component: ColumnSelect,
  argTypes: {
    headerBgColor: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    columnBorderColor: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    columnBgColor: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    buttonBgColor: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    buttonHoverBgColor: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    searchFocusBorderColor: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    optionHoverBgColor: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    optionSelectedBgColor: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    buttonTextAdd: {
      control: 'text',
      table: {
        category: 'Buttons',
      },
    },
    buttonTextAddAll: {
      control: 'text',
      table: {
        category: 'Buttons',
      },
    },
    buttonTextRemove: {
      control: 'text',
      table: {
        category: 'Buttons',
      },
    },
    buttonTextRemoveAll: {
      control: 'text',
      table: {
        category: 'Buttons',
      },
    },
  },
} as Meta

const Template: Story = (args) => {
  const theme = {
    headerBgColor: args.headerBgColor ?? '#FFFFFF',
    columnBorderColor: args.columnBorderColor ?? '#CFA4FF',
    textColor: '#000000',
    columnBgColor: args.columnBgColor ?? '#CBD5E0',
    buttonBgColor: args.buttonBgColor ?? '#CBD5E0',
    buttonHoverBgColor: args.buttonHoverBgColor ?? '#CBD5E098',
    searchFocusBorderColor: args.searchFocusBorderColor ?? '#805Ad5',
    optionHoverBgColor: args.optionHoverBgColor ?? '#F2F2F2',
    optionSelectedBgColor: args.optionSelectedBgColor ?? '#DDDCDC',
  }
  const buttonText = {
    add: args.buttonTextAdd ?? 'Add',
    addAll: args.buttonTextAddAll ?? 'All all',
    remove: args.buttonTextRemove ?? 'Remove',
    removeAll: args.buttonTextRemoveAll ?? 'Remove all',
  }
  return <ColumnSelect theme={theme} buttonText={buttonText} {...args} />
}

export const Default = Template.bind({})

export const DisabledDoubleClick = Template.bind({})
DisabledDoubleClick.args = { ...Default.args, disableDoubleClick: true }

export const DisabledKeyboard = Template.bind({})
DisabledKeyboard.args = { ...Default.args, disableKeyboard: true }

export const DefaultValues = Template.bind({})
DefaultValues.args = { ...Default.args, defaultValue: [options[1], options[2]] }

export const Max = Template.bind({})
Max.args = { ...Default.args, max: 3 }

export const Searchable = Template.bind({})
Searchable.args = {
  ...Default.args,
  isSearchable: true,
  searchFocusBorderColor: '',
}

export const DisableAllButtons = Template.bind({})
DisableAllButtons.args = { ...Default.args, disableAllButtons: true }
