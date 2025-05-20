import type { Meta, StoryObj } from '@storybook/angular';
import { AlzIconComponent } from '../components/alz-icon.component';

const meta: Meta<AlzIconComponent> = {
  title: 'Components/AlzIcon',
  component: AlzIconComponent,
  tags: ['autodocs'],
  // Nous définissons les arguments qui peuvent être contrôlés
  argTypes: {
    filled: {
      control: 'boolean',
      description: "Détermine si l'icône est remplie ou non",
    },
  },
  // Configuration par défaut pour toutes les stories
  args: {
    filled: 'false',
  },
  // Paramètres pour la documentation
  parameters: {
    docs: {
      description: {
        component: "Composant d'affichage d'icônes utilisant la police Material Symbols",
      },
    },
  },
};

export default meta;
type Story = StoryObj<AlzIconComponent>;

// Story par défaut avec une icône non remplie
export const Default: Story = {
  args: {},
  render: () => ({
    template: `<alz-icon>home</alz-icon>`,
  }),
};

// Story avec une icône remplie
export const Filled: Story = {
  args: {
    filled: 'true',
  },
  render: () => ({
    template: `<alz-icon [filled]="'true'">favorite</alz-icon>`,
  }),
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
