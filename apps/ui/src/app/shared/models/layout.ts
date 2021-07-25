import { ComponentType } from '@angular/cdk/portal';
import { ComponentRef, TemplateRef } from '@angular/core';
import { ResumeTemplateKeys } from '../enums';

export namespace Layout {
  export interface Link {
    iconName: string;
    iconLabel: string;
    linkHref: any[] | string;
  }

  export interface PanelItem {
    title: string;
    description?: string;
    headerIcon?: string;
    template?: TemplateRef<any>;
    component?: ComponentRef<any>;
  }

  export interface Panel {
    title: string;
    subtitle: string;
    icon: string;
    actions?: { label: string; action: (event?: any) => void }[];
  }

  export interface Template {
    name: string;
    component: ComponentType<any>;
  }

  export type ResumeTemplate = {
    [key in keyof typeof ResumeTemplateKeys]: Template;
  };
}
