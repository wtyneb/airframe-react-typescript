import React, { ReactElement } from 'react'

export interface ILayoutContentProps {
    layoutPartName: string;
    type: ITargetType;
    children: ReactElement;
}

export interface ITargetType {
    layoutPartName: string;
}

const LayoutContent = (props: ILayoutContentProps) => (
    <div className="layout__content">
        {props.children}
    </div>
);

export { LayoutContent };