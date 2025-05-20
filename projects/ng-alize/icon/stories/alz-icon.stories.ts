import type { Meta, StoryObj } from '@storybook/angular';
import { AlzIconComponent } from '../components';

type StoryType = AlzIconComponent & { icon?: string };

const meta: Meta<StoryType> = {
  title: 'Components/AlzIcon',
  component: AlzIconComponent,
  tags: ['autodocs'],
  // Nous définissons les arguments qui peuvent être contrôlés
  argTypes: {
    filled: {
      control: 'boolean',
      description: "Détermine si l'icône est remplie ou non",
    },
    icon: {
      control: 'text',
      description: "Nom de l'icône à afficher",
    },
  },
  // Configuration par défaut pour toutes les stories
  args: {
    filled: false,
    icon: 'home',
  },
  // Paramètres pour la documentation
  parameters: {
    docs: {
      description: {
        component: "Composant d'affichage d'icônes utilisant la police Material Symbols",
      },
    },
  },
  render: (args) => {
    const { icon, ...props } = args;
    return {
      props,
      template: `<alz-icon [filled]="filled">${icon}</alz-icon>`,
    };
  },
};

export default meta;
type Story = StoryObj<StoryType>;

// Story par défaut avec une icône non remplie
export const Default: Story = {
  args: {
    icon: 'favorite',
  },
};

// Story avec une icône remplie
export const Filled: Story = {
  args: {
    filled: true,
    icon: 'settings',
  },
};

// Story montrant plusieurs icônes
export const MultipleIcons: Story = {
  render: () => ({
    template: `
      <div class="flex gap-4">
        <alz-icon>search</alz-icon>
        <alz-icon [filled]="'true'">favorite</alz-icon>
        <alz-icon>settings</alz-icon>
        <alz-icon [filled]="'true'">star</alz-icon>
      </div>
    `,
  }),
};
